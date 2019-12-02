// Generated from /Users/jingweicai/Documents/code/ASimpleCompiler/src/calculatorV2/lib/PlayScript.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class PlayScriptLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, INT=13, IntegerLiteral=14, LPAREN=15, RPAREN=16, 
		SEMI=17, COMMA=18, ADD=19, SUB=20, MUL=21, DIV=22, MOD=23, Identifier=24, 
		WS=25, COMMENT=26, LINE_COMMENT=27;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] ruleNames = {
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "INT", "IntegerLiteral", "DecimalIntegerLiteral", 
		"IntegerTypeSuffix", "DecimalNumeral", "Digits", "Digit", "NonZeroDigit", 
		"DigitsAndUnderscores", "DigitOrUnderscore", "Underscores", "LPAREN", 
		"RPAREN", "SEMI", "COMMA", "ADD", "SUB", "MUL", "DIV", "MOD", "Identifier", 
		"Letter", "LetterOrDigit", "WS", "COMMENT", "LINE_COMMENT"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'='", "'*='", "'/='", "'%='", "'+='", "'-='", "'<<='", "'>>='", 
		"'>>>='", "'&='", "'^='", "'|='", "'int'", null, "'('", "')'", "';'", 
		"','", "'+'", "'-'", "'*'", "'/'", "'%'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, null, null, null, null, null, null, null, null, null, null, null, 
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


	public PlayScriptLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "PlayScript.g4"; }

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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\35\u00e6\b\1\4\2"+
		"\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4"+
		"\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22"+
		"\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31"+
		"\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t"+
		" \4!\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\3\2\3\2\3\3\3\3\3\3\3"+
		"\4\3\4\3\4\3\5\3\5\3\5\3\6\3\6\3\6\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\t\3\t"+
		"\3\t\3\t\3\n\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3\f\3\f\3\f\3\r\3\r\3\r\3"+
		"\16\3\16\3\16\3\16\3\17\3\17\3\20\3\20\5\20\177\n\20\3\21\3\21\3\22\3"+
		"\22\3\22\5\22\u0086\n\22\3\22\3\22\3\22\5\22\u008b\n\22\5\22\u008d\n\22"+
		"\3\23\3\23\5\23\u0091\n\23\3\23\5\23\u0094\n\23\3\24\3\24\5\24\u0098\n"+
		"\24\3\25\3\25\3\26\6\26\u009d\n\26\r\26\16\26\u009e\3\27\3\27\5\27\u00a3"+
		"\n\27\3\30\6\30\u00a6\n\30\r\30\16\30\u00a7\3\31\3\31\3\32\3\32\3\33\3"+
		"\33\3\34\3\34\3\35\3\35\3\36\3\36\3\37\3\37\3 \3 \3!\3!\3\"\3\"\7\"\u00be"+
		"\n\"\f\"\16\"\u00c1\13\"\3#\3#\3$\3$\3%\6%\u00c8\n%\r%\16%\u00c9\3%\3"+
		"%\3&\3&\3&\3&\7&\u00d2\n&\f&\16&\u00d5\13&\3&\3&\3&\3&\3&\3\'\3\'\3\'"+
		"\3\'\7\'\u00e0\n\'\f\'\16\'\u00e3\13\'\3\'\3\'\3\u00d3\2(\3\3\5\4\7\5"+
		"\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33\17\35\20\37\2!\2#\2%"+
		"\2\'\2)\2+\2-\2/\2\61\21\63\22\65\23\67\249\25;\26=\27?\30A\31C\32E\2"+
		"G\2I\33K\34M\35\3\2\b\4\2NNnn\3\2\63;\6\2&&C\\aac|\7\2&&\62;C\\aac|\5"+
		"\2\13\f\16\17\"\"\4\2\f\f\17\17\2\u00e8\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3"+
		"\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2"+
		"\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35"+
		"\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2\2\65\3\2\2\2\2\67\3\2\2\2\29\3\2\2"+
		"\2\2;\3\2\2\2\2=\3\2\2\2\2?\3\2\2\2\2A\3\2\2\2\2C\3\2\2\2\2I\3\2\2\2\2"+
		"K\3\2\2\2\2M\3\2\2\2\3O\3\2\2\2\5Q\3\2\2\2\7T\3\2\2\2\tW\3\2\2\2\13Z\3"+
		"\2\2\2\r]\3\2\2\2\17`\3\2\2\2\21d\3\2\2\2\23h\3\2\2\2\25m\3\2\2\2\27p"+
		"\3\2\2\2\31s\3\2\2\2\33v\3\2\2\2\35z\3\2\2\2\37|\3\2\2\2!\u0080\3\2\2"+
		"\2#\u008c\3\2\2\2%\u008e\3\2\2\2\'\u0097\3\2\2\2)\u0099\3\2\2\2+\u009c"+
		"\3\2\2\2-\u00a2\3\2\2\2/\u00a5\3\2\2\2\61\u00a9\3\2\2\2\63\u00ab\3\2\2"+
		"\2\65\u00ad\3\2\2\2\67\u00af\3\2\2\29\u00b1\3\2\2\2;\u00b3\3\2\2\2=\u00b5"+
		"\3\2\2\2?\u00b7\3\2\2\2A\u00b9\3\2\2\2C\u00bb\3\2\2\2E\u00c2\3\2\2\2G"+
		"\u00c4\3\2\2\2I\u00c7\3\2\2\2K\u00cd\3\2\2\2M\u00db\3\2\2\2OP\7?\2\2P"+
		"\4\3\2\2\2QR\7,\2\2RS\7?\2\2S\6\3\2\2\2TU\7\61\2\2UV\7?\2\2V\b\3\2\2\2"+
		"WX\7\'\2\2XY\7?\2\2Y\n\3\2\2\2Z[\7-\2\2[\\\7?\2\2\\\f\3\2\2\2]^\7/\2\2"+
		"^_\7?\2\2_\16\3\2\2\2`a\7>\2\2ab\7>\2\2bc\7?\2\2c\20\3\2\2\2de\7@\2\2"+
		"ef\7@\2\2fg\7?\2\2g\22\3\2\2\2hi\7@\2\2ij\7@\2\2jk\7@\2\2kl\7?\2\2l\24"+
		"\3\2\2\2mn\7(\2\2no\7?\2\2o\26\3\2\2\2pq\7`\2\2qr\7?\2\2r\30\3\2\2\2s"+
		"t\7~\2\2tu\7?\2\2u\32\3\2\2\2vw\7k\2\2wx\7p\2\2xy\7v\2\2y\34\3\2\2\2z"+
		"{\5\37\20\2{\36\3\2\2\2|~\5#\22\2}\177\5!\21\2~}\3\2\2\2~\177\3\2\2\2"+
		"\177 \3\2\2\2\u0080\u0081\t\2\2\2\u0081\"\3\2\2\2\u0082\u008d\7\62\2\2"+
		"\u0083\u008a\5)\25\2\u0084\u0086\5%\23\2\u0085\u0084\3\2\2\2\u0085\u0086"+
		"\3\2\2\2\u0086\u008b\3\2\2\2\u0087\u0088\5/\30\2\u0088\u0089\5%\23\2\u0089"+
		"\u008b\3\2\2\2\u008a\u0085\3\2\2\2\u008a\u0087\3\2\2\2\u008b\u008d\3\2"+
		"\2\2\u008c\u0082\3\2\2\2\u008c\u0083\3\2\2\2\u008d$\3\2\2\2\u008e\u0093"+
		"\5\'\24\2\u008f\u0091\5+\26\2\u0090\u008f\3\2\2\2\u0090\u0091\3\2\2\2"+
		"\u0091\u0092\3\2\2\2\u0092\u0094\5\'\24\2\u0093\u0090\3\2\2\2\u0093\u0094"+
		"\3\2\2\2\u0094&\3\2\2\2\u0095\u0098\7\62\2\2\u0096\u0098\5)\25\2\u0097"+
		"\u0095\3\2\2\2\u0097\u0096\3\2\2\2\u0098(\3\2\2\2\u0099\u009a\t\3\2\2"+
		"\u009a*\3\2\2\2\u009b\u009d\5-\27\2\u009c\u009b\3\2\2\2\u009d\u009e\3"+
		"\2\2\2\u009e\u009c\3\2\2\2\u009e\u009f\3\2\2\2\u009f,\3\2\2\2\u00a0\u00a3"+
		"\5\'\24\2\u00a1\u00a3\7a\2\2\u00a2\u00a0\3\2\2\2\u00a2\u00a1\3\2\2\2\u00a3"+
		".\3\2\2\2\u00a4\u00a6\7a\2\2\u00a5\u00a4\3\2\2\2\u00a6\u00a7\3\2\2\2\u00a7"+
		"\u00a5\3\2\2\2\u00a7\u00a8\3\2\2\2\u00a8\60\3\2\2\2\u00a9\u00aa\7*\2\2"+
		"\u00aa\62\3\2\2\2\u00ab\u00ac\7+\2\2\u00ac\64\3\2\2\2\u00ad\u00ae\7=\2"+
		"\2\u00ae\66\3\2\2\2\u00af\u00b0\7.\2\2\u00b08\3\2\2\2\u00b1\u00b2\7-\2"+
		"\2\u00b2:\3\2\2\2\u00b3\u00b4\7/\2\2\u00b4<\3\2\2\2\u00b5\u00b6\7,\2\2"+
		"\u00b6>\3\2\2\2\u00b7\u00b8\7\61\2\2\u00b8@\3\2\2\2\u00b9\u00ba\7\'\2"+
		"\2\u00baB\3\2\2\2\u00bb\u00bf\5E#\2\u00bc\u00be\5G$\2\u00bd\u00bc\3\2"+
		"\2\2\u00be\u00c1\3\2\2\2\u00bf\u00bd\3\2\2\2\u00bf\u00c0\3\2\2\2\u00c0"+
		"D\3\2\2\2\u00c1\u00bf\3\2\2\2\u00c2\u00c3\t\4\2\2\u00c3F\3\2\2\2\u00c4"+
		"\u00c5\t\5\2\2\u00c5H\3\2\2\2\u00c6\u00c8\t\6\2\2\u00c7\u00c6\3\2\2\2"+
		"\u00c8\u00c9\3\2\2\2\u00c9\u00c7\3\2\2\2\u00c9\u00ca\3\2\2\2\u00ca\u00cb"+
		"\3\2\2\2\u00cb\u00cc\b%\2\2\u00ccJ\3\2\2\2\u00cd\u00ce\7\61\2\2\u00ce"+
		"\u00cf\7,\2\2\u00cf\u00d3\3\2\2\2\u00d0\u00d2\13\2\2\2\u00d1\u00d0\3\2"+
		"\2\2\u00d2\u00d5\3\2\2\2\u00d3\u00d4\3\2\2\2\u00d3\u00d1\3\2\2\2\u00d4"+
		"\u00d6\3\2\2\2\u00d5\u00d3\3\2\2\2\u00d6\u00d7\7,\2\2\u00d7\u00d8\7\61"+
		"\2\2\u00d8\u00d9\3\2\2\2\u00d9\u00da\b&\3\2\u00daL\3\2\2\2\u00db\u00dc"+
		"\7\61\2\2\u00dc\u00dd\7\61\2\2\u00dd\u00e1\3\2\2\2\u00de\u00e0\n\7\2\2"+
		"\u00df\u00de\3\2\2\2\u00e0\u00e3\3\2\2\2\u00e1\u00df\3\2\2\2\u00e1\u00e2"+
		"\3\2\2\2\u00e2\u00e4\3\2\2\2\u00e3\u00e1\3\2\2\2\u00e4\u00e5\b\'\3\2\u00e5"+
		"N\3\2\2\2\21\2~\u0085\u008a\u008c\u0090\u0093\u0097\u009e\u00a2\u00a7"+
		"\u00bf\u00c9\u00d3\u00e1\4\b\2\2\2\3\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}