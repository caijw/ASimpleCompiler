// Generated from LibExpr.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by LibExprParser.

function LibExprVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

LibExprVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
LibExprVisitor.prototype.constructor = LibExprVisitor;

// Visit a parse tree produced by LibExprParser#prog.
LibExprVisitor.prototype.visitProg = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LibExprParser#stat.
LibExprVisitor.prototype.visitStat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LibExprParser#expr.
LibExprVisitor.prototype.visitExpr = function(ctx) {
  return this.visitChildren(ctx);
};



exports.LibExprVisitor = LibExprVisitor;