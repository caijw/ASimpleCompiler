const antlr4 = require("antlr4");
const Lexer = require("./LabeledExprLexer").LabeledExprLexer;
const Parser = require("./LabeledExprParser").LabeledExprParser;
const EvalVisitor = require("./EvalVisitor").LabeledExprVisitor;
const fs = require("fs");

function parse(script) {
  const chars = new antlr4.InputStream(script);
  const lexer = new Lexer(chars);
  const tokens  = new antlr4.CommonTokenStream(lexer);
  var parser = new Parser(tokens);
  parser.buildParseTrees = true;
  const tree = parser.prog(); // 针对init规则，开始语法分析
  console.log("The lisp style ast of : \n" + script);
  const stringTree = tree.toStringTree(parser.ruleNames);
  console.log(stringTree);
  const eval = new EvalVisitor();
  eval.visit(tree);
}


let script;

// script = "{1, {2, 3} , 343}"
// parse(script);



// script = "{1, 2"
// parse(script);

script = fs.readFileSync("t.Expr").toString();
parse(script);
