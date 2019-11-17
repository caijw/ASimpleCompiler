import {TokenType} from "./TokenType";

class Token {
  public type: TokenType = TokenType.Init;
  public text: string = "";
  public getType(): TokenType {
    return this.type;
  }
  public getText(): string {
    return this.text;
  }
}

export { Token };
