const antlr4 = require("antlr4");
const Lexer = require("./JavaScriptLexer").JavaScriptLexer;
const Parser = require("./JavaScriptParser").JavaScriptParser;

debugger;

var script = `var a = 10;`;
var chars = new antlr4.InputStream(script);
var lexer = new Lexer(chars);
var tokens  = new antlr4.CommonTokenStream(lexer);
var parser = new Parser(tokens);

parser.buildParseTrees = true;
debugger;
var tree = parser.program();

console.log("The lisp style ast of : " + script);

console.log(tree.toStringTree(parser.ruleNames));
