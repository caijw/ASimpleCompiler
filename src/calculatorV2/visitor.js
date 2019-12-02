var antlr4 = require('antlr4/index');
const BaseVisitor = require("./lib/PlayScriptVisitor").PlayScriptVisitor;

function PlayScriptVisitor() {
	BaseVisitor.call(this);
	return this;
}

PlayScriptVisitor.prototype = Object.create(BaseVisitor.prototype);
PlayScriptVisitor.prototype.constructor = PlayScriptVisitor;


// Visit a parse tree produced by PlayScriptParser#additiveExpression.
PlayScriptVisitor.prototype.visitAdditiveExpression = function(ctx) {
  if (ctx.ADD() !== null || ctx.SUB() !== null) {
    const left = this.visitAdditiveExpression(ctx.additiveExpression());
    const right = this.visitMultiplicativeExpression(ctx.multiplicativeExpression());
    if (ctx.ADD() != null) {
        return left + right;
    } else {
        return left - right;
    }
  } else {
    return this.visitMultiplicativeExpression(ctx.multiplicativeExpression());
  }
};


// Visit a parse tree produced by PlayScriptParser#multiplicativeExpression.
PlayScriptVisitor.prototype.visitMultiplicativeExpression = function(ctx) {
  debugger;
  if (ctx.MUL() !== null || ctx.DIV() !== null || ctx.MOD() !== null) {
    const left = this.visitMultiplicativeExpression(ctx.multiplicativeExpression());
    const right = this.visitPrimaryExpression(ctx.primaryExpression());
    if (ctx.MUL() !== null) {
        return left * right;
    } else if (ctx.DIV() !== null) {
        return left / right;
    } else {
        return left % right;
    }
} else {
    return this.visitPrimaryExpression(ctx.primaryExpression());
}
};


PlayScriptVisitor.prototype.visitPrimaryExpression = function(ctx) {
  debugger;
  if (ctx.literal() !== null) {
      return this.visitLiteral(ctx.literal());
  }
  return 0;
}

// Visit a parse tree produced by PlayScriptParser#literal.
PlayScriptVisitor.prototype.visitLiteral = function(ctx) {
  debugger;
  if (ctx.IntegerLiteral() !== null){
      return parseInt(ctx.IntegerLiteral().getText(), 10);
  }
  return 0;
};


exports.PlayScriptVisitor = PlayScriptVisitor;