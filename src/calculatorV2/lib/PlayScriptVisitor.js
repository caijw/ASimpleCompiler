// Generated from PlayScript.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by PlayScriptParser.

function PlayScriptVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

PlayScriptVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
PlayScriptVisitor.prototype.constructor = PlayScriptVisitor;

// Visit a parse tree produced by PlayScriptParser#literal.
PlayScriptVisitor.prototype.visitLiteral = function(ctx) {
  console.log("visitLiteral");
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlayScriptParser#primitiveType.
PlayScriptVisitor.prototype.visitPrimitiveType = function(ctx) {
  console.log("visitPrimitiveType");
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlayScriptParser#statement.
PlayScriptVisitor.prototype.visitStatement = function(ctx) {
  console.log("visitStatement");
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlayScriptParser#expressionStatement.
PlayScriptVisitor.prototype.visitExpressionStatement = function(ctx) {
  console.log("visitExpressionStatement");
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlayScriptParser#declaration.
PlayScriptVisitor.prototype.visitDeclaration = function(ctx) {
  console.log("visitDeclaration");
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlayScriptParser#initializer.
PlayScriptVisitor.prototype.visitInitializer = function(ctx) {
  console.log("visitInitializer");
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlayScriptParser#expression.
PlayScriptVisitor.prototype.visitExpression = function(ctx) {
  console.log("visitExpression");
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlayScriptParser#assignmentExpression.
PlayScriptVisitor.prototype.visitAssignmentExpression = function(ctx) {
  console.log("visitAssignmentExpression");
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlayScriptParser#assignmentOperator.
PlayScriptVisitor.prototype.visitAssignmentOperator = function(ctx) {
  console.log("visitAssignmentOperator");
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlayScriptParser#additiveExpression.
PlayScriptVisitor.prototype.visitAdditiveExpression = function(ctx) {
  console.log("visitAdditiveExpression");
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlayScriptParser#multiplicativeExpression.
PlayScriptVisitor.prototype.visitMultiplicativeExpression = function(ctx) {
  console.log("visitMultiplicativeExpression");
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlayScriptParser#primaryExpression.
PlayScriptVisitor.prototype.visitPrimaryExpression = function(ctx) {
  console.log("visitPrimaryExpression");
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlayScriptParser#argumentExpressionList.
PlayScriptVisitor.prototype.visitArgumentExpressionList = function(ctx) {
  console.log("visitArgumentExpressionList");
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlayScriptParser#compoundStatement.
PlayScriptVisitor.prototype.visitCompoundStatement = function(ctx) {
  console.log("visitCompoundStatement");
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlayScriptParser#blockItemList.
PlayScriptVisitor.prototype.visitBlockItemList = function(ctx) {
  console.log("visitBlockItemList");
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlayScriptParser#blockItem.
PlayScriptVisitor.prototype.visitBlockItem = function(ctx) {
  console.log("visitBlockItem");
  return this.visitChildren(ctx);
};



exports.PlayScriptVisitor = PlayScriptVisitor;