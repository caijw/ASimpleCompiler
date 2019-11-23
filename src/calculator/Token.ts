
enum TokenType {
  Init, // init 0
  Plus,   // +
  Minus,  // -
  Star,   // *
  Slash,  // /

  GE,     // >= 5
  GT,     // >
  EQ,     // ==
  LE,     // <=
  LT,     // <

  SemiColon, // ; 10
  LeftParen, // (
  RightParen, // )

  Assignment, // = 13

  If, // 14
  Else,

  Int, // 16

  Identifier, // 标识符 17

  IntLiteral,  // 整型字面量
  StringLiteral,  // 字符串字面量

}

class Token {
  public type: TokenType;
  public text: string;
  constructor() {
    this.type = TokenType.Init;
    this.text = ``;
  }
  public getType(): TokenType {
    return this.type;
  }
  public getText(): string {
    return this.text;
  }
}

class TokenReader {
  private tokens: Token[];
  private pos: number;
  constructor(tokens: Token[]) {
    this.tokens = tokens;
    this.pos = 0;
  }
  public read(): Token|null {
    if (this.pos < this.tokens.length) {
      return this.tokens[this.pos++];
    } else {
      return null;
    }
  }
  public peek(): Token|null {
    if (this.pos < this.tokens.length) {
      return this.tokens[this.pos];
    } else {
      return null;
    }
  }
  public unread() {
    if (this.pos > 0) {
      this.pos--;
    }
  }
  public getPosition(): number {
    return this.pos;
  }
  public setPostion(postion: number) {
    if (postion >= 0 && postion <= this.tokens.length) {
      this.pos = postion;
    }
  }

}

export { Token, TokenType, TokenReader };
