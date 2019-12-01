// Generated from /Users/jingweicai/Documents/code/ASimpleCompiler/src/calculatorV2/lib/CommonLexer.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class CommonLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		INT=1, IntegerLiteral=2, LPAREN=3, RPAREN=4, SEMI=5, COMMA=6, ADD=7, SUB=8, 
		MUL=9, DIV=10, MOD=11, Identifier=12, WS=13, COMMENT=14, LINE_COMMENT=15;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] ruleNames = {
		"INT", "IntegerLiteral", "DecimalIntegerLiteral", "IntegerTypeSuffix", 
		"DecimalNumeral", "Digits", "Digit", "NonZeroDigit", "DigitsAndUnderscores", 
		"DigitOrUnderscore", "Underscores", "LPAREN", "RPAREN", "SEMI", "COMMA", 
		"ADD", "SUB", "MUL", "DIV", "MOD", "Identifier", "Letter", "LetterOrDigit", 
		"WS", "COMMENT", "LINE_COMMENT"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'int'", null, "'('", "')'", "';'", "','", "'+'", "'-'", "'*'", 
		"'/'", "'%'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "INT", "IntegerLiteral", "LPAREN", "RPAREN", "SEMI", "COMMA", "ADD", 
		"SUB", "MUL", "DIV", "MOD", "Identifier", "WS", "COMMENT", "LINE_COMMENT"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public CommonLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "CommonLexer.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\21\u00a7\b\1\4\2"+
		"\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4"+
		"\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22"+
		"\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31"+
		"\t\31\4\32\t\32\4\33\t\33\3\2\3\2\3\2\3\2\3\3\3\3\3\4\3\4\5\4@\n\4\3\5"+
		"\3\5\3\6\3\6\3\6\5\6G\n\6\3\6\3\6\3\6\5\6L\n\6\5\6N\n\6\3\7\3\7\5\7R\n"+
		"\7\3\7\5\7U\n\7\3\b\3\b\5\bY\n\b\3\t\3\t\3\n\6\n^\n\n\r\n\16\n_\3\13\3"+
		"\13\5\13d\n\13\3\f\6\fg\n\f\r\f\16\fh\3\r\3\r\3\16\3\16\3\17\3\17\3\20"+
		"\3\20\3\21\3\21\3\22\3\22\3\23\3\23\3\24\3\24\3\25\3\25\3\26\3\26\7\26"+
		"\177\n\26\f\26\16\26\u0082\13\26\3\27\3\27\3\30\3\30\3\31\6\31\u0089\n"+
		"\31\r\31\16\31\u008a\3\31\3\31\3\32\3\32\3\32\3\32\7\32\u0093\n\32\f\32"+
		"\16\32\u0096\13\32\3\32\3\32\3\32\3\32\3\32\3\33\3\33\3\33\3\33\7\33\u00a1"+
		"\n\33\f\33\16\33\u00a4\13\33\3\33\3\33\3\u0094\2\34\3\3\5\4\7\2\t\2\13"+
		"\2\r\2\17\2\21\2\23\2\25\2\27\2\31\5\33\6\35\7\37\b!\t#\n%\13\'\f)\r+"+
		"\16-\2/\2\61\17\63\20\65\21\3\2\b\4\2NNnn\3\2\63;\6\2&&C\\aac|\7\2&&\62"+
		";C\\aac|\5\2\13\f\16\17\"\"\4\2\f\f\17\17\2\u00a9\2\3\3\2\2\2\2\5\3\2"+
		"\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2"+
		"#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2\61\3\2\2\2\2"+
		"\63\3\2\2\2\2\65\3\2\2\2\3\67\3\2\2\2\5;\3\2\2\2\7=\3\2\2\2\tA\3\2\2\2"+
		"\13M\3\2\2\2\rO\3\2\2\2\17X\3\2\2\2\21Z\3\2\2\2\23]\3\2\2\2\25c\3\2\2"+
		"\2\27f\3\2\2\2\31j\3\2\2\2\33l\3\2\2\2\35n\3\2\2\2\37p\3\2\2\2!r\3\2\2"+
		"\2#t\3\2\2\2%v\3\2\2\2\'x\3\2\2\2)z\3\2\2\2+|\3\2\2\2-\u0083\3\2\2\2/"+
		"\u0085\3\2\2\2\61\u0088\3\2\2\2\63\u008e\3\2\2\2\65\u009c\3\2\2\2\678"+
		"\7k\2\289\7p\2\29:\7v\2\2:\4\3\2\2\2;<\5\7\4\2<\6\3\2\2\2=?\5\13\6\2>"+
		"@\5\t\5\2?>\3\2\2\2?@\3\2\2\2@\b\3\2\2\2AB\t\2\2\2B\n\3\2\2\2CN\7\62\2"+
		"\2DK\5\21\t\2EG\5\r\7\2FE\3\2\2\2FG\3\2\2\2GL\3\2\2\2HI\5\27\f\2IJ\5\r"+
		"\7\2JL\3\2\2\2KF\3\2\2\2KH\3\2\2\2LN\3\2\2\2MC\3\2\2\2MD\3\2\2\2N\f\3"+
		"\2\2\2OT\5\17\b\2PR\5\23\n\2QP\3\2\2\2QR\3\2\2\2RS\3\2\2\2SU\5\17\b\2"+
		"TQ\3\2\2\2TU\3\2\2\2U\16\3\2\2\2VY\7\62\2\2WY\5\21\t\2XV\3\2\2\2XW\3\2"+
		"\2\2Y\20\3\2\2\2Z[\t\3\2\2[\22\3\2\2\2\\^\5\25\13\2]\\\3\2\2\2^_\3\2\2"+
		"\2_]\3\2\2\2_`\3\2\2\2`\24\3\2\2\2ad\5\17\b\2bd\7a\2\2ca\3\2\2\2cb\3\2"+
		"\2\2d\26\3\2\2\2eg\7a\2\2fe\3\2\2\2gh\3\2\2\2hf\3\2\2\2hi\3\2\2\2i\30"+
		"\3\2\2\2jk\7*\2\2k\32\3\2\2\2lm\7+\2\2m\34\3\2\2\2no\7=\2\2o\36\3\2\2"+
		"\2pq\7.\2\2q \3\2\2\2rs\7-\2\2s\"\3\2\2\2tu\7/\2\2u$\3\2\2\2vw\7,\2\2"+
		"w&\3\2\2\2xy\7\61\2\2y(\3\2\2\2z{\7\'\2\2{*\3\2\2\2|\u0080\5-\27\2}\177"+
		"\5/\30\2~}\3\2\2\2\177\u0082\3\2\2\2\u0080~\3\2\2\2\u0080\u0081\3\2\2"+
		"\2\u0081,\3\2\2\2\u0082\u0080\3\2\2\2\u0083\u0084\t\4\2\2\u0084.\3\2\2"+
		"\2\u0085\u0086\t\5\2\2\u0086\60\3\2\2\2\u0087\u0089\t\6\2\2\u0088\u0087"+
		"\3\2\2\2\u0089\u008a\3\2\2\2\u008a\u0088\3\2\2\2\u008a\u008b\3\2\2\2\u008b"+
		"\u008c\3\2\2\2\u008c\u008d\b\31\2\2\u008d\62\3\2\2\2\u008e\u008f\7\61"+
		"\2\2\u008f\u0090\7,\2\2\u0090\u0094\3\2\2\2\u0091\u0093\13\2\2\2\u0092"+
		"\u0091\3\2\2\2\u0093\u0096\3\2\2\2\u0094\u0095\3\2\2\2\u0094\u0092\3\2"+
		"\2\2\u0095\u0097\3\2\2\2\u0096\u0094\3\2\2\2\u0097\u0098\7,\2\2\u0098"+
		"\u0099\7\61\2\2\u0099\u009a\3\2\2\2\u009a\u009b\b\32\3\2\u009b\64\3\2"+
		"\2\2\u009c\u009d\7\61\2\2\u009d\u009e\7\61\2\2\u009e\u00a2\3\2\2\2\u009f"+
		"\u00a1\n\7\2\2\u00a0\u009f\3\2\2\2\u00a1\u00a4\3\2\2\2\u00a2\u00a0\3\2"+
		"\2\2\u00a2\u00a3\3\2\2\2\u00a3\u00a5\3\2\2\2\u00a4\u00a2\3\2\2\2\u00a5"+
		"\u00a6\b\33\3\2\u00a6\66\3\2\2\2\21\2?FKMQTX_ch\u0080\u008a\u0094\u00a2"+
		"\4\b\2\2\2\3\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}