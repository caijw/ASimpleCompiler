// Generated from ArrayInit.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by ArrayInitParser.

function ArrayInitVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

ArrayInitVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
ArrayInitVisitor.prototype.constructor = ArrayInitVisitor;

// Visit a parse tree produced by ArrayInitParser#init.
ArrayInitVisitor.prototype.visitInit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ArrayInitParser#value.
ArrayInitVisitor.prototype.visitValue = function(ctx) {
  return this.visitChildren(ctx);
};



exports.ArrayInitVisitor = ArrayInitVisitor;