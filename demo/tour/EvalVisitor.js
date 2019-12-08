var antlr4 = require('antlr4/index');
const Base = require("./LabeledExprVisitor").LabeledExprVisitor;
const LabeledExprParser = require("./LabeledExprParser").LabeledExprParser;
function LabeledExprVisitor() {
  Base.call(this);
  this.memory = {};
	return this;
}

LabeledExprVisitor.prototype = Object.create(Base.prototype);
LabeledExprVisitor.prototype.constructor = LabeledExprVisitor;

LabeledExprVisitor.prototype.visitAssign = function(ctx) {
  const id = ctx.ID().getText();
  const value = this.visit(ctx.expr());
  this.memory[id] = value;
};


LabeledExprVisitor.prototype.visitPrintExpr = function(ctx) {
  const value = this.visit(ctx.expr());
  console.log(value);
  return 0;
};

LabeledExprVisitor.prototype.visitInt = function(ctx) {
  return parseInt(ctx.INT().getText(), 10);
};

LabeledExprVisitor.prototype.visitId = function(ctx) {
  const id = ctx.ID().getText();
  if (typeof this.memory[id] !== "undefined") {
    return this.memory[id];
  }
  return 0;
};

LabeledExprVisitor.prototype.visitMulDiv = function(ctx) {
  const left = this.visit(ctx.expr(0));
  const right = this.visit(ctx.expr(1));
  if (ctx.op.type === LabeledExprParser.MUL) {
    return left * right;
  } else {
    return left / right;
  }
};

LabeledExprVisitor.prototype.visitAddSub = function(ctx) {
  const left = this.visit(ctx.expr(0));
  const right = this.visit(ctx.expr(1));
  if (ctx.op.type === LabeledExprParser.ADD) {
    return left + right;
  } else {
    return left - right;
  }
};


LabeledExprVisitor.prototype.visitParens = function(ctx) {
  return this.visit(ctx.expr());
};

LabeledExprVisitor.prototype.visitClear = function(ctx) {
  this.map = {};
};

exports.LabeledExprVisitor = LabeledExprVisitor;
