const antlr4 = require("antlr4");
const Lexer = require("./ECMAScriptLexer").ECMAScriptLexer;
const Parser = require("./ECMAScriptParser").ECMAScriptParser;

debugger;

var script = `var in = 30;`;
var chars = new antlr4.InputStream(script);
var lexer = new Lexer(chars);
var tokens  = new antlr4.CommonTokenStream(lexer);
var parser = new Parser(tokens);

parser.buildParseTrees = true;

var tree = parser.program();

console.log("The lisp style ast of : " + script);

console.log(tree.toStringTree(parser.ruleNames));
