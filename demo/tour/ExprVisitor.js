// Generated from Expr.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by ExprParser.

function ExprVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

ExprVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
ExprVisitor.prototype.constructor = ExprVisitor;

// Visit a parse tree produced by ExprParser#prog.
ExprVisitor.prototype.visitProg = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#stat.
ExprVisitor.prototype.visitStat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#expr.
ExprVisitor.prototype.visitExpr = function(ctx) {
  return this.visitChildren(ctx);
};



exports.ExprVisitor = ExprVisitor;