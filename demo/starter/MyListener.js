var antlr4 = require('antlr4/index');
const BaseListener = require("./ArrayInitListener").ArrayInitListener;

function ArrayInitListener() {
	BaseListener.call(this);
	return this;
}

ArrayInitListener.prototype = Object.create(BaseListener.prototype);
ArrayInitListener.prototype.constructor = ArrayInitListener;

// Enter a parse tree produced by ArrayInitParser#init.
ArrayInitListener.prototype.enterInit = function(ctx) {
  console.log('"');
};

// Exit a parse tree produced by ArrayInitParser#init.
ArrayInitListener.prototype.exitInit = function(ctx) {
  console.log('"');
};


// Enter a parse tree produced by ArrayInitParser#value.
ArrayInitListener.prototype.enterValue = function(ctx) {
  debugger;
  const value = parseInt(ctx.INT().getText(), 10);
  const hexValue = '0000' + value.toString(16);
  console.log(`\\u${hexValue.substring(hexValue.length - 4)}`);
};


exports.ArrayInitListener = ArrayInitListener;


