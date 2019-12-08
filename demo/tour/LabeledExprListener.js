// Generated from LabeledExpr.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by LabeledExprParser.
function LabeledExprListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

LabeledExprListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
LabeledExprListener.prototype.constructor = LabeledExprListener;

// Enter a parse tree produced by LabeledExprParser#prog.
LabeledExprListener.prototype.enterProg = function(ctx) {
};

// Exit a parse tree produced by LabeledExprParser#prog.
LabeledExprListener.prototype.exitProg = function(ctx) {
};


// Enter a parse tree produced by LabeledExprParser#clear.
LabeledExprListener.prototype.enterClear = function(ctx) {
};

// Exit a parse tree produced by LabeledExprParser#clear.
LabeledExprListener.prototype.exitClear = function(ctx) {
};


// Enter a parse tree produced by LabeledExprParser#printExpr.
LabeledExprListener.prototype.enterPrintExpr = function(ctx) {
};

// Exit a parse tree produced by LabeledExprParser#printExpr.
LabeledExprListener.prototype.exitPrintExpr = function(ctx) {
};


// Enter a parse tree produced by LabeledExprParser#assign.
LabeledExprListener.prototype.enterAssign = function(ctx) {
};

// Exit a parse tree produced by LabeledExprParser#assign.
LabeledExprListener.prototype.exitAssign = function(ctx) {
};


// Enter a parse tree produced by LabeledExprParser#blank.
LabeledExprListener.prototype.enterBlank = function(ctx) {
};

// Exit a parse tree produced by LabeledExprParser#blank.
LabeledExprListener.prototype.exitBlank = function(ctx) {
};


// Enter a parse tree produced by LabeledExprParser#parens.
LabeledExprListener.prototype.enterParens = function(ctx) {
};

// Exit a parse tree produced by LabeledExprParser#parens.
LabeledExprListener.prototype.exitParens = function(ctx) {
};


// Enter a parse tree produced by LabeledExprParser#MulDiv.
LabeledExprListener.prototype.enterMulDiv = function(ctx) {
};

// Exit a parse tree produced by LabeledExprParser#MulDiv.
LabeledExprListener.prototype.exitMulDiv = function(ctx) {
};


// Enter a parse tree produced by LabeledExprParser#AddSub.
LabeledExprListener.prototype.enterAddSub = function(ctx) {
};

// Exit a parse tree produced by LabeledExprParser#AddSub.
LabeledExprListener.prototype.exitAddSub = function(ctx) {
};


// Enter a parse tree produced by LabeledExprParser#id.
LabeledExprListener.prototype.enterId = function(ctx) {
};

// Exit a parse tree produced by LabeledExprParser#id.
LabeledExprListener.prototype.exitId = function(ctx) {
};


// Enter a parse tree produced by LabeledExprParser#int.
LabeledExprListener.prototype.enterInt = function(ctx) {
};

// Exit a parse tree produced by LabeledExprParser#int.
LabeledExprListener.prototype.exitInt = function(ctx) {
};



exports.LabeledExprListener = LabeledExprListener;