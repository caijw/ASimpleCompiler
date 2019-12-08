// Generated from LibExpr.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by LibExprParser.
function LibExprListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

LibExprListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
LibExprListener.prototype.constructor = LibExprListener;

// Enter a parse tree produced by LibExprParser#prog.
LibExprListener.prototype.enterProg = function(ctx) {
};

// Exit a parse tree produced by LibExprParser#prog.
LibExprListener.prototype.exitProg = function(ctx) {
};


// Enter a parse tree produced by LibExprParser#stat.
LibExprListener.prototype.enterStat = function(ctx) {
};

// Exit a parse tree produced by LibExprParser#stat.
LibExprListener.prototype.exitStat = function(ctx) {
};


// Enter a parse tree produced by LibExprParser#expr.
LibExprListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by LibExprParser#expr.
LibExprListener.prototype.exitExpr = function(ctx) {
};



exports.LibExprListener = LibExprListener;