// Generated from LabeledExpr.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by LabeledExprParser.

function LabeledExprVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

LabeledExprVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
LabeledExprVisitor.prototype.constructor = LabeledExprVisitor;

// Visit a parse tree produced by LabeledExprParser#prog.
LabeledExprVisitor.prototype.visitProg = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LabeledExprParser#clear.
LabeledExprVisitor.prototype.visitClear = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LabeledExprParser#printExpr.
LabeledExprVisitor.prototype.visitPrintExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LabeledExprParser#assign.
LabeledExprVisitor.prototype.visitAssign = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LabeledExprParser#blank.
LabeledExprVisitor.prototype.visitBlank = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LabeledExprParser#parens.
LabeledExprVisitor.prototype.visitParens = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LabeledExprParser#MulDiv.
LabeledExprVisitor.prototype.visitMulDiv = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LabeledExprParser#AddSub.
LabeledExprVisitor.prototype.visitAddSub = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LabeledExprParser#id.
LabeledExprVisitor.prototype.visitId = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LabeledExprParser#int.
LabeledExprVisitor.prototype.visitInt = function(ctx) {
  return this.visitChildren(ctx);
};



exports.LabeledExprVisitor = LabeledExprVisitor;