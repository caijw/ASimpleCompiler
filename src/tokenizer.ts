import * as util from "./util";
import { stat } from "fs";

// 有限状态机的各种状态
export enum DfaState {
  Initial,
  If,
  Id_if1,
  Id_if2,
  Else,
  Id_else1,
  Id_else2,
  Id_else3,
  Id_else4,
  Int,
  Id_int1,
  Id_int2,
  Id_int3,
  Id,
  GT,
  GE,
  Assignment,
  Plus,
  Minus,
  Star,
  Slash,
  SemiColon,
  LeftParen,
  RightParen,
  IntLiteral,
}

// token类型
export enum TokenType {
  Initial,
  Plus,    // +
  Minus,    // -
  Star,    // *
  Slash,    // /
  GE,    // >=
  GT,    // >
  EQ,    // ==
  LE,    // <=
  LT,    // <
  SemiColon,    // ;
  LeftParen,    // (
  RightParen,    // )
  Assignment,    // =
  If,
  Else,
  Int,
  Identifier,    // 标识符
  IntLiteral,    // 整型字面量
  StringLiteral,    // 字符串字面量
}

export interface ILoc {
  start: {
    line: number;
    column: number;
  };
  end: {
    line: number;
    column: number;
  };
}

export interface IToken {
  type: number;
  text: string;
  loc: ILoc;
}

export class Token {
  public type: TokenType;
  public text: string;
  public loc: ILoc;
  public constructor() {
    this.type = TokenType.Initial;
    this.text = ``;
    this.loc = {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      },
    };
  }
}

export class Tokenizer {
  private line: number = 0;
  private column: number = 0;
  private index: number = 0;
  private token: Token = new Token();
  private tokenText: string = ``;
  private state: DfaState = DfaState.Initial;
  private tokens: Token[] = [];
  public constructor() {
    this.line = 0;
    this.column = 0;
    this.index = 0;
  }
  public tokenize(code: string) {
    this.line = 1;
    this.column = 0;
    this.index = 0;
    this.token = new Token();
    this.tokenText = ``;
    this.state = DfaState.Initial;
    this.tokens = [];
    while (this.index < code.length) {
      const ch = code[this.index];
      if (util.isNewLine(ch)) {
        this.line++;
        this.column = 0;
      }
      this.column++;
      switch (this.state) {
        case DfaState.Initial:
          this.state = this.initToken(ch);
          break;
        case DfaState.Id:
          if (util.isAlpha(ch) || util.isDigit(ch)) {
            this.tokenText = `${this.tokenText}${ch}`;
          } else {
            this.state = this.initToken(ch);
          }
          break;
        case DfaState.GT:
          if (ch === "=") {
            this.token.type = TokenType.GE;
            this.state = DfaState.GE;
            this.tokenText = `${this.tokenText}${ch}`;
          }
          break;
        case DfaState.GE:
        case DfaState.Assignment:
        case DfaState.Plus:
        case DfaState.Minus:
        case DfaState.Star:
        case DfaState.Slash:
        case DfaState.SemiColon:
        case DfaState.LeftParen:
        case DfaState.RightParen:
          this.state = this.initToken(ch);
          break;
        case DfaState.Initial:
          if (util.isDigit(ch)) {
            this.tokenText = `${this.tokenText}${ch}`;
          } else {
            this.state = this.initToken(ch);
          }
          break;
        case DfaState.Id_int1:
          if (ch === "n") {
            this.state = DfaState.Id_int2;
            this.tokenText = `${this.tokenText}${ch}`;
          } else if (util.isDigit(ch) || util.isAlpha(ch)) {
            this.state = DfaState.Id;
            this.tokenText = `${this.tokenText}${ch}`;
          } else {
            this.state = this.initToken(ch);
          }
          break;
        case DfaState.Id_int2:
          if (ch === "t") {
            this.state = DfaState.Id_int3;
            this.tokenText = `${this.tokenText}${ch}`;
          } else if (util.isDigit(ch) || util.isAlpha(ch)) {
            this.state = DfaState.Id;
            this.tokenText = `${this.tokenText}${ch}`;
          } else {
            this.state = this.initToken(ch);
          }
          break;
        case DfaState.Id_int3:
          if (util.isBlank(ch)) {
            this.token.type = TokenType.Int;
            this.state = this.initToken(ch);
          } else {
            this.state = DfaState.Id;
            this.tokenText = `${this.tokenText}${ch}`;
          }
          break;
        default:
      }

    }
  }
  private initToken(ch: string): DfaState {
    if (this.tokenText.length) {
      this.token.text = this.tokenText;
      this.tokens.push(this.token);
      this.token.text = ``;
      this.token = new Token();
    }
    let newState: DfaState = DfaState.Initial;
    if (util.isAlpha(ch)) { // 第一个字符是字母
      if (ch === "i") {
        newState = DfaState.Id_int1;
      } else {
        newState = DfaState.Id; // 进入Id状态
      }
      this.token.type = TokenType.Identifier;
      this.tokenText = `${this.tokenText}${ch}`;
    } else if (util.isDigit(ch)) {
      newState = DfaState.IntLiteral;
      this.token.type = TokenType.IntLiteral;
      this.tokenText = `${this.tokenText}${ch}`;
    } else if (ch === ">") {
      newState = DfaState.GT;
      this.token.type = TokenType.GT;
      this.tokenText = `${this.tokenText}${ch}`;
    } else if (ch === "+") {
      newState = DfaState.Plus;
      this.token.type = TokenType.Plus;
      this.tokenText = `${this.tokenText}${ch}`;
    } else if (ch === "-") {
      newState = DfaState.Minus;
      this.token.type = TokenType.Minus;
      this.tokenText = `${this.tokenText}${ch}`;
    } else if (ch === "*") {
      newState = DfaState.Star;
      this.token.type = TokenType.Star;
      this.tokenText = `${this.tokenText}${ch}`;
    } else if (ch === "/") {
      newState = DfaState.Slash;
      this.token.type = TokenType.Slash;
      this.tokenText = `${this.tokenText}${ch}`;
    } else if (ch === ";") {
      newState = DfaState.SemiColon;
      this.token.type = TokenType.SemiColon;
      this.tokenText = `${this.tokenText}${ch}`;
    } else if (ch === "(") {
      newState = DfaState.LeftParen;
      this.token.type = TokenType.LeftParen;
      this.tokenText = `${this.tokenText}${ch}`;
    } else if (ch === ")") {
      newState = DfaState.RightParen;
      this.token.type = TokenType.RightParen;
      this.tokenText = `${this.tokenText}${ch}`;
    } else if (ch === "=") {
      newState = DfaState.Assignment;
      this.token.type = TokenType.Assignment;
      this.tokenText = `${this.tokenText}${ch}`;
    } else {
      newState = DfaState.Initial; // skip all unknown patterns
    }

    return newState;
  }
}
