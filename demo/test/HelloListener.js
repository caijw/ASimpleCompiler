// Generated from Hello.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by HelloParser.
function HelloListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

HelloListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
HelloListener.prototype.constructor = HelloListener;

// Enter a parse tree produced by HelloParser#stat.
HelloListener.prototype.enterStat = function(ctx) {
};

// Exit a parse tree produced by HelloParser#stat.
HelloListener.prototype.exitStat = function(ctx) {
};


// Enter a parse tree produced by HelloParser#assign.
HelloListener.prototype.enterAssign = function(ctx) {
};

// Exit a parse tree produced by HelloParser#assign.
HelloListener.prototype.exitAssign = function(ctx) {
};


// Enter a parse tree produced by HelloParser#expr.
HelloListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by HelloParser#expr.
HelloListener.prototype.exitExpr = function(ctx) {
};



exports.HelloListener = HelloListener;