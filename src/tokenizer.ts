import * as util from "./util";
import { stat } from "fs";

const DfaStateSet: string[] = [
  "Initial",
  "If",
  "Id_if1",
  "Id_if2",
  "Else",
  "Id_else1",
  "Id_else2",
  "Id_else3",
  "Id_else4",
  "Int",
  "Id_int1",
  "Id_int2",
  "Id_int3",
  "Id",
  "GT",
  "GE",
  "Assignment",
  "Plus",
  "Minus",
  "Star",
  "Slash",
  "SemiColon",
  "LeftParen",
  "RightParen",
  "IntLiteral",
]

interface IDfaState {
  [key: string]: string;
}
// 有限状态机的各种状态
export const DfaState: IDfaState = {};

DfaStateSet.forEach((state) => {
  DfaState[state] = state;
});

const TokenTypeSet: string[] = [
  "Initial",
  "Plus",    // +
  "Minus",    // -
  "Star",    // *
  "Slash",    // /
  "GE",    // >=
  "GT",    // >
  "EQ",    // ==
  "LE",    // <=
  "LT",    // <
  "SemiColon",    // ;
  "LeftParen",    // (
  "RightParen",    // )
  "Assignment",    // =
  "If",
  "Else",
  "Int",
  "Identifier",    // 标识符
  "IntLiteral",    // 整型字面量
  "StringLiteral",    // 字符串字面量
];
// token类型

interface ITokenType {
  [key: string]: string;
}

export const TokenType: ITokenType = {};

TokenTypeSet.forEach((tokenType) => {
  TokenType[tokenType] = tokenType;
});

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
  type: string;
  text: string;
  loc: ILoc;
}

export class Tokenizer {
  private line: number = 0;
  private column: number = 0;
  private index: number = 0;
  private token: IToken = {
    type: "",
    text: "",
    loc: {
      start: {
        line: 0,
        column: 0,
      },
      end: {
        line: 0,
        column: 0,
      },
    },
  };
  private tokenText: string = ``;
  private state: string = DfaState.Initial;
  private tokens: IToken[] = [];
  public constructor() {
    this.line = 0;
    this.column = 0;
    this.index = 0;
  }
  public tokenize(code: string) {
    this.line = 1;
    this.column = 0;
    this.index = 0;
    this.token = this.getNewToken();
    this.tokenText = ``;
    this.state = DfaState.Initial;
    this.tokens = [];
    let ch: string = ``;
    while (this.index < code.length) {
      ch = code[this.index];
      if (util.isNewLine(ch)) {
        this.line++;
        this.column = 0;
      }
      this.column++;
      this.index++;
      // debugger;
      switch (this.state) {
        case DfaState.Initial:
          this.state = this.initToken(ch);
          break;
        case DfaState.Id:
          if (util.isAlpha(ch) || util.isDigit(ch)) {
            this.updateTokenText(ch);
            this.updateTokenLocEnd();
          } else {
            this.state = this.initToken(ch);
          }
          break;
        case DfaState.GT:
          if (ch === "=") {
            this.token.type = TokenType.GE;
            this.state = DfaState.GE;
            this.updateTokenText(ch);
            this.updateTokenLocEnd();
          } else {
            this.state = this.initToken(ch);
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
        case DfaState.IntLiteral:
          if (util.isDigit(ch)) {
            this.updateTokenText(ch);
            this.updateTokenLocEnd();
          } else {
            this.state = this.initToken(ch);
          }
          break;
        case DfaState.Id_int1:
          if (ch === "n") {
            this.state = DfaState.Id_int2;
            this.updateTokenText(ch);
            this.updateTokenLocEnd();
          } else if (util.isDigit(ch) || util.isAlpha(ch)) {
            this.state = DfaState.Id;
            this.updateTokenText(ch);
            this.updateTokenLocEnd();
          } else {
            this.state = this.initToken(ch);
          }
          break;
        case DfaState.Id_int2:
          if (ch === "t") {
            this.state = DfaState.Id_int3;
            this.updateTokenText(ch);
            this.updateTokenLocEnd();
          } else if (util.isDigit(ch) || util.isAlpha(ch)) {
            this.state = DfaState.Id;
            this.updateTokenText(ch);
            this.updateTokenLocEnd();
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
            this.updateTokenText(ch);
            this.updateTokenLocEnd();
          }
          break;
        default:
      }
    }
    if (this.tokenText.length) {
      this.initToken(ch);
    }
  }
  public getTokens(): IToken[] {
    return this.tokens;
  }
  private initToken(ch: string): string {
    if (this.tokenText.length) {
      this.token.text = this.tokenText;
      this.tokens.push(this.token);
      this.tokenText = ``;
      this.token = this.getNewToken();
    }
    let newState: string = DfaState.Initial;
    if (util.isAlpha(ch)) { // 第一个字符是字母
      if (ch === "i") {
        newState = DfaState.Id_int1;
      } else {
        newState = DfaState.Id; // 进入Id状态
      }
      this.token.type = TokenType.Identifier;
      this.updateTokenText(ch);
      this.updateTokenLocStart();
      this.updateTokenLocEnd();
    } else if (util.isDigit(ch)) {
      newState = DfaState.IntLiteral;
      this.token.type = TokenType.IntLiteral;
      this.updateTokenText(ch);
      this.updateTokenLocStart();
      this.updateTokenLocEnd();
    } else if (ch === ">") {
      newState = DfaState.GT;
      this.token.type = TokenType.GT;
      this.updateTokenText(ch);
      this.updateTokenLocStart();
      this.updateTokenLocEnd();
    } else if (ch === "+") {
      newState = DfaState.Plus;
      this.token.type = TokenType.Plus;
      this.updateTokenText(ch);
      this.updateTokenLocStart();
      this.updateTokenLocEnd();
    } else if (ch === "-") {
      newState = DfaState.Minus;
      this.token.type = TokenType.Minus;
      this.updateTokenText(ch);
      this.updateTokenLocStart();
      this.updateTokenLocEnd();
    } else if (ch === "*") {
      newState = DfaState.Star;
      this.token.type = TokenType.Star;
      this.updateTokenText(ch);
      this.updateTokenLocStart();
      this.updateTokenLocEnd();
    } else if (ch === "/") {
      newState = DfaState.Slash;
      this.token.type = TokenType.Slash;
      this.updateTokenText(ch);
      this.updateTokenLocStart();
      this.updateTokenLocEnd();
    } else if (ch === ";") {
      newState = DfaState.SemiColon;
      this.token.type = TokenType.SemiColon;
      this.updateTokenText(ch);
      this.updateTokenLocStart();
      this.updateTokenLocEnd();
    } else if (ch === "(") {
      newState = DfaState.LeftParen;
      this.token.type = TokenType.LeftParen;
      this.updateTokenText(ch);
      this.updateTokenLocStart();
      this.updateTokenLocEnd();
    } else if (ch === ")") {
      newState = DfaState.RightParen;
      this.token.type = TokenType.RightParen;
      this.updateTokenText(ch);
      this.updateTokenLocStart();
      this.updateTokenLocEnd();
    } else if (ch === "=") {
      newState = DfaState.Assignment;
      this.token.type = TokenType.Assignment;
      this.updateTokenText(ch);
      this.updateTokenLocStart();
      this.updateTokenLocEnd();
    } else {
      newState = DfaState.Initial; // skip all unknown patterns
    }

    return newState;
  }
  private updateTokenText(ch: string) {
    this.tokenText = `${this.tokenText}${ch}`;
  }
  private updateTokenLocStart() {
    this.token.loc.start.line = this.line;
    this.token.loc.start.column = this.column;
  }
  private updateTokenLocEnd() {
    this.token.loc.end.line = this.line;
    this.token.loc.end.column = this.column;
  }
  private getNewToken(): IToken {
    const token: IToken = {
      type: "",
      text: "",
      loc: {
        start: {
          line: 0,
          column: 0,
        },
        end: {
          line: 0,
          column: 0,
        },
      },
    };
    return token;
  }
}
