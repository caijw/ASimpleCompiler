const antlr4 = require("antlr4");
const Lexer = require("./lib/PlayScriptLexer").PlayScriptLexer;
const Parser = require("./lib/PlayScriptParser").PlayScriptParser;
const Listener = require("./lib/PlayScriptListener").PlayScriptListener;
const Visitor = require("./visitor").PlayScriptVisitor;

var script = "2+6/3;"
var chars = new antlr4.InputStream(script);
var lexer = new Lexer(chars);
var tokens  = new antlr4.CommonTokenStream(lexer);
var parser = new Parser(tokens);
parser.buildParseTrees = true;

debugger;

var tree = parser.additiveExpression();

console.log("The lisp style ast of : " + script);
// console.log(tree.toStringTree(parser));

console.log(tree.toStringTree(parser.ruleNames));
debugger;
var res = tree.accept(new Visitor());

console.log("res:", res);