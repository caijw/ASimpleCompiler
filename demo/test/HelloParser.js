// Generated from Hello.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var HelloListener = require('./HelloListener').HelloListener;
var HelloVisitor = require('./HelloVisitor').HelloVisitor;

var grammarFileName = "Hello.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0005\u0011\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0002\u0002\u0005\u0002",
    "\u0004\u0006\u0002\u0002\u0002\r\u0002\b\u0003\u0002\u0002\u0002\u0004",
    "\n\u0003\u0002\u0002\u0002\u0006\u000e\u0003\u0002\u0002\u0002\b\t\u0005",
    "\u0004\u0003\u0002\t\u0003\u0003\u0002\u0002\u0002\n\u000b\u0007\u0005",
    "\u0002\u0002\u000b\f\u0007\u0003\u0002\u0002\f\r\u0005\u0006\u0004\u0002",
    "\r\u0005\u0003\u0002\u0002\u0002\u000e\u000f\u0007\u0004\u0002\u0002",
    "\u000f\u0007\u0003\u0002\u0002\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'='", "'int'" ];

var symbolicNames = [ null, null, "INT", "ID" ];

var ruleNames =  [ "stat", "assign", "expr" ];

function HelloParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

HelloParser.prototype = Object.create(antlr4.Parser.prototype);
HelloParser.prototype.constructor = HelloParser;

Object.defineProperty(HelloParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

HelloParser.EOF = antlr4.Token.EOF;
HelloParser.T__0 = 1;
HelloParser.INT = 2;
HelloParser.ID = 3;

HelloParser.RULE_stat = 0;
HelloParser.RULE_assign = 1;
HelloParser.RULE_expr = 2;


function StatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HelloParser.RULE_stat;
    return this;
}

StatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatContext.prototype.constructor = StatContext;

StatContext.prototype.assign = function() {
    return this.getTypedRuleContext(AssignContext,0);
};

StatContext.prototype.enterRule = function(listener) {
    if(listener instanceof HelloListener ) {
        listener.enterStat(this);
	}
};

StatContext.prototype.exitRule = function(listener) {
    if(listener instanceof HelloListener ) {
        listener.exitStat(this);
	}
};

StatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HelloVisitor ) {
        return visitor.visitStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HelloParser.StatContext = StatContext;

HelloParser.prototype.stat = function() {

    var localctx = new StatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, HelloParser.RULE_stat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 6;
        this.assign();
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


function AssignContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HelloParser.RULE_assign;
    return this;
}

AssignContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignContext.prototype.constructor = AssignContext;

AssignContext.prototype.ID = function() {
    return this.getToken(HelloParser.ID, 0);
};

AssignContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

AssignContext.prototype.enterRule = function(listener) {
    if(listener instanceof HelloListener ) {
        listener.enterAssign(this);
	}
};

AssignContext.prototype.exitRule = function(listener) {
    if(listener instanceof HelloListener ) {
        listener.exitAssign(this);
	}
};

AssignContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HelloVisitor ) {
        return visitor.visitAssign(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HelloParser.AssignContext = AssignContext;

HelloParser.prototype.assign = function() {

    var localctx = new AssignContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, HelloParser.RULE_assign);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 8;
        this.match(HelloParser.ID);
        this.state = 9;
        this.match(HelloParser.T__0);
        this.state = 10;
        this.expr();
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


function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HelloParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.INT = function() {
    return this.getToken(HelloParser.INT, 0);
};

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof HelloListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof HelloListener ) {
        listener.exitExpr(this);
	}
};

ExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof HelloVisitor ) {
        return visitor.visitExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




HelloParser.ExprContext = ExprContext;

HelloParser.prototype.expr = function() {

    var localctx = new ExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, HelloParser.RULE_expr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 12;
        this.match(HelloParser.INT);
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


exports.HelloParser = HelloParser;
