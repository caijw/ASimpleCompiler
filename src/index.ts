import { Tokenizer, IToken } from "./tokenizer";
import * as NodeUtil from "util";

const tokenizer = new Tokenizer();

const codes: string[] = [
  `int age = 45;`,
  `;;=>;`,
  "inta age = 45;",
  "in age = 45;",
  "age >= 45;",
  "age > 45;",
];

codes.forEach((code) => {
  tokenizer.tokenize(code);
  const tokens = tokenizer.getTokens();
  console.log("code:");
  console.log(code);
  console.log(NodeUtil.inspect(tokens, { depth: 10, colors: true, maxArrayLength: 1000 }));
});
