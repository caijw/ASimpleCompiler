import { Lexer } from "./Lexer";
import { TokenReader } from "./Token";

let script: string;
let tokenReader: TokenReader;
const lexer = new Lexer();

script = "int age = 45; i";
console.log(`parse: "${script}"`);
tokenReader = lexer.tokenize(script);
lexer.dump(tokenReader);

script = "inta age = 45;";
console.log(`parse: "${script}"`);
tokenReader = lexer.tokenize(script);
lexer.dump(tokenReader);

script = "in age = 45;";
console.log(`parse: "${script}"`);
tokenReader = lexer.tokenize(script);
lexer.dump(tokenReader);

script = "age >= 45;";
console.log(`parse: "${script}"`);
tokenReader = lexer.tokenize(script);
lexer.dump(tokenReader);

script = "age > 45;";
console.log(`parse: "${script}"`);
tokenReader = lexer.tokenize(script);
lexer.dump(tokenReader);

