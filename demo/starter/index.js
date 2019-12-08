const antlr4 = require("antlr4");
const Lexer = require("./ArrayInitLexer").ArrayInitLexer;
const Parser = require("./ArrayInitParser").ArrayInitParser;
const Listener = require("./MyListener").ArrayInitListener;
// const Visitor = require("./visitor").PlayScriptVisitor;



function parse(script) {
  const chars = new antlr4.InputStream(script);
  const lexer = new Lexer(chars);
  const tokens  = new antlr4.CommonTokenStream(lexer);
  var parser = new Parser(tokens);
  parser.buildParseTrees = true;
  const tree = parser.init(); // 针对init规则，开始语法分析
  console.log("The lisp style ast of : " + script);
  console.log(tree.toStringTree(parser.ruleNames));
  const listener = new Listener();
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
}


let script;

// script = "{1, {2, 3} , 343}"
// parse(script);



// script = "{1, 2"
// parse(script);

script = "{1, 2, 3 , 343}"
parse(script);
