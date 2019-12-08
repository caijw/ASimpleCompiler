// Generated from LabeledExpr.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u000eE\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0006\t+\n\t\r\t\u000e\t",
    ",\u0003\n\u0006\n0\n\n\r\n\u000e\n1\u0003\u000b\u0005\u000b5\n\u000b",
    "\u0003\u000b\u0003\u000b\u0003\f\u0006\f:\n\f\r\f\u000e\f;\u0003\f\u0003",
    "\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0002\u0002\u000e",
    "\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t",
    "\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u0003\u0002\u0005\u0004",
    "\u0002C\\c|\u0003\u00022;\u0004\u0002\u000b\u000b\"\"\u0002H\u0002\u0003",
    "\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007",
    "\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b",
    "\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f",
    "\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013",
    "\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017",
    "\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0003\u001b",
    "\u0003\u0002\u0002\u0002\u0005\u001d\u0003\u0002\u0002\u0002\u0007\u001f",
    "\u0003\u0002\u0002\u0002\t!\u0003\u0002\u0002\u0002\u000b#\u0003\u0002",
    "\u0002\u0002\r%\u0003\u0002\u0002\u0002\u000f\'\u0003\u0002\u0002\u0002",
    "\u0011*\u0003\u0002\u0002\u0002\u0013/\u0003\u0002\u0002\u0002\u0015",
    "4\u0003\u0002\u0002\u0002\u00179\u0003\u0002\u0002\u0002\u0019?\u0003",
    "\u0002\u0002\u0002\u001b\u001c\u0007?\u0002\u0002\u001c\u0004\u0003",
    "\u0002\u0002\u0002\u001d\u001e\u0007*\u0002\u0002\u001e\u0006\u0003",
    "\u0002\u0002\u0002\u001f \u0007+\u0002\u0002 \b\u0003\u0002\u0002\u0002",
    "!\"\u0007,\u0002\u0002\"\n\u0003\u0002\u0002\u0002#$\u00071\u0002\u0002",
    "$\f\u0003\u0002\u0002\u0002%&\u0007-\u0002\u0002&\u000e\u0003\u0002",
    "\u0002\u0002\'(\u0007/\u0002\u0002(\u0010\u0003\u0002\u0002\u0002)+",
    "\t\u0002\u0002\u0002*)\u0003\u0002\u0002\u0002+,\u0003\u0002\u0002\u0002",
    ",*\u0003\u0002\u0002\u0002,-\u0003\u0002\u0002\u0002-\u0012\u0003\u0002",
    "\u0002\u0002.0\t\u0003\u0002\u0002/.\u0003\u0002\u0002\u000201\u0003",
    "\u0002\u0002\u00021/\u0003\u0002\u0002\u000212\u0003\u0002\u0002\u0002",
    "2\u0014\u0003\u0002\u0002\u000235\u0007\u000f\u0002\u000243\u0003\u0002",
    "\u0002\u000245\u0003\u0002\u0002\u000256\u0003\u0002\u0002\u000267\u0007",
    "\f\u0002\u00027\u0016\u0003\u0002\u0002\u00028:\t\u0004\u0002\u0002",
    "98\u0003\u0002\u0002\u0002:;\u0003\u0002\u0002\u0002;9\u0003\u0002\u0002",
    "\u0002;<\u0003\u0002\u0002\u0002<=\u0003\u0002\u0002\u0002=>\b\f\u0002",
    "\u0002>\u0018\u0003\u0002\u0002\u0002?@\u0007e\u0002\u0002@A\u0007n",
    "\u0002\u0002AB\u0007g\u0002\u0002BC\u0007c\u0002\u0002CD\u0007t\u0002",
    "\u0002D\u001a\u0003\u0002\u0002\u0002\u0007\u0002,14;\u0003\b\u0002",
    "\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function LabeledExprLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

LabeledExprLexer.prototype = Object.create(antlr4.Lexer.prototype);
LabeledExprLexer.prototype.constructor = LabeledExprLexer;

Object.defineProperty(LabeledExprLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

LabeledExprLexer.EOF = antlr4.Token.EOF;
LabeledExprLexer.T__0 = 1;
LabeledExprLexer.T__1 = 2;
LabeledExprLexer.T__2 = 3;
LabeledExprLexer.MUL = 4;
LabeledExprLexer.DIV = 5;
LabeledExprLexer.ADD = 6;
LabeledExprLexer.SUB = 7;
LabeledExprLexer.ID = 8;
LabeledExprLexer.INT = 9;
LabeledExprLexer.NEWLINE = 10;
LabeledExprLexer.WS = 11;
LabeledExprLexer.CLEAR = 12;

LabeledExprLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

LabeledExprLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

LabeledExprLexer.prototype.literalNames = [ null, "'='", "'('", "')'", "'*'", 
                                            "'/'", "'+'", "'-'", null, null, 
                                            null, null, "'clear'" ];

LabeledExprLexer.prototype.symbolicNames = [ null, null, null, null, "MUL", 
                                             "DIV", "ADD", "SUB", "ID", 
                                             "INT", "NEWLINE", "WS", "CLEAR" ];

LabeledExprLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "MUL", 
                                         "DIV", "ADD", "SUB", "ID", "INT", 
                                         "NEWLINE", "WS", "CLEAR" ];

LabeledExprLexer.prototype.grammarFileName = "LabeledExpr.g4";



exports.LabeledExprLexer = LabeledExprLexer;

