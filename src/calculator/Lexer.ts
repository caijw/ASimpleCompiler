import { Token } from "./Token";
import * as util from "./util";

class SimpleTokenReader {
  constructor() {
    this.tokens = [];
  }
  private tokens: Array<Token>;
  private pos: number;
}

class Lexer {
  constructor() {
    this.StringBuffer = "";
    this.tokens = [];
    this.token = null;
  }
  private StringBuffer: string;
  private tokens: Array<Token>;
  private token: Token | null;
  private initToken(ch: string) {

  }

}