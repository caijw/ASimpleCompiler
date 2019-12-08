// Generated from ArrayInit.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ArrayInitListener = require('./ArrayInitListener').ArrayInitListener;
var ArrayInitVisitor = require('./ArrayInitVisitor').ArrayInitVisitor;

var grammarFileName = "ArrayInit.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0007\u0016\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0007\u0002\u000b\n\u0002\f\u0002",
    "\u000e\u0002\u000e\u000b\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
    "\u0003\u0005\u0003\u0014\n\u0003\u0003\u0003\u0002\u0002\u0004\u0002",
    "\u0004\u0002\u0002\u0002\u0015\u0002\u0006\u0003\u0002\u0002\u0002\u0004",
    "\u0013\u0003\u0002\u0002\u0002\u0006\u0007\u0007\u0003\u0002\u0002\u0007",
    "\f\u0005\u0004\u0003\u0002\b\t\u0007\u0004\u0002\u0002\t\u000b\u0005",
    "\u0004\u0003\u0002\n\b\u0003\u0002\u0002\u0002\u000b\u000e\u0003\u0002",
    "\u0002\u0002\f\n\u0003\u0002\u0002\u0002\f\r\u0003\u0002\u0002\u0002",
    "\r\u000f\u0003\u0002\u0002\u0002\u000e\f\u0003\u0002\u0002\u0002\u000f",
    "\u0010\u0007\u0005\u0002\u0002\u0010\u0003\u0003\u0002\u0002\u0002\u0011",
    "\u0014\u0005\u0002\u0002\u0002\u0012\u0014\u0007\u0006\u0002\u0002\u0013",
    "\u0011\u0003\u0002\u0002\u0002\u0013\u0012\u0003\u0002\u0002\u0002\u0014",
    "\u0005\u0003\u0002\u0002\u0002\u0004\f\u0013"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'{'", "','", "'}'" ];

var symbolicNames = [ null, null, null, null, "INT", "WS" ];

var ruleNames =  [ "init", "value" ];

function ArrayInitParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

ArrayInitParser.prototype = Object.create(antlr4.Parser.prototype);
ArrayInitParser.prototype.constructor = ArrayInitParser;

Object.defineProperty(ArrayInitParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

ArrayInitParser.EOF = antlr4.Token.EOF;
ArrayInitParser.T__0 = 1;
ArrayInitParser.T__1 = 2;
ArrayInitParser.T__2 = 3;
ArrayInitParser.INT = 4;
ArrayInitParser.WS = 5;

ArrayInitParser.RULE_init = 0;
ArrayInitParser.RULE_value = 1;


function InitContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArrayInitParser.RULE_init;
    return this;
}

InitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InitContext.prototype.constructor = InitContext;

InitContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};

InitContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArrayInitListener ) {
        listener.enterInit(this);
	}
};

InitContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArrayInitListener ) {
        listener.exitInit(this);
	}
};

InitContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ArrayInitVisitor ) {
        return visitor.visitInit(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ArrayInitParser.InitContext = InitContext;

ArrayInitParser.prototype.init = function() {

    var localctx = new InitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, ArrayInitParser.RULE_init);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 4;
        this.match(ArrayInitParser.T__0);
        this.state = 5;
        this.value();
        this.state = 10;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ArrayInitParser.T__1) {
            this.state = 6;
            this.match(ArrayInitParser.T__1);
            this.state = 7;
            this.value();
            this.state = 12;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 13;
        this.match(ArrayInitParser.T__2);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ArrayInitParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;

ValueContext.prototype.init = function() {
    return this.getTypedRuleContext(InitContext,0);
};

ValueContext.prototype.INT = function() {
    return this.getToken(ArrayInitParser.INT, 0);
};

ValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof ArrayInitListener ) {
        listener.enterValue(this);
	}
};

ValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof ArrayInitListener ) {
        listener.exitValue(this);
	}
};

ValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ArrayInitVisitor ) {
        return visitor.visitValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ArrayInitParser.ValueContext = ValueContext;

ArrayInitParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, ArrayInitParser.RULE_value);
    try {
        this.state = 17;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ArrayInitParser.T__0:
            this.enterOuterAlt(localctx, 1);
            this.state = 15;
            this.init();
            break;
        case ArrayInitParser.INT:
            this.enterOuterAlt(localctx, 2);
            this.state = 16;
            this.match(ArrayInitParser.INT);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.ArrayInitParser = ArrayInitParser;
