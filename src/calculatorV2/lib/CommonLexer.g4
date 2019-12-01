
lexer grammar CommonLexer;  //lexer关键字意味着这是一个词法规则


INT : 'int';

IntegerLiteral
	:	DecimalIntegerLiteral
	;

fragment
DecimalIntegerLiteral
	:	DecimalNumeral IntegerTypeSuffix?
	;

fragment
IntegerTypeSuffix
	:	[lL]
	;

fragment
DecimalNumeral
	:	'0'
	|	NonZeroDigit (Digits? | Underscores Digits)
	;

fragment
Digits
	:	Digit (DigitsAndUnderscores? Digit)?
	;

fragment
Digit
	:	'0'
	|	NonZeroDigit
	;

fragment
NonZeroDigit
	:	[1-9]
	;

fragment
DigitsAndUnderscores
	:	DigitOrUnderscore+
	;

fragment
DigitOrUnderscore
	:	Digit
	|	'_'
	;

fragment
Underscores
	:	'_'+
	;


LPAREN : '(';
RPAREN : ')';
SEMI : ';';
COMMA : ',';



// §3.12 Operators

// ASSIGN : '=';
// GT : '>';
// LT : '<';
// BANG : '!';
// TILDE : '~';
// QUESTION : '?';
// COLON : ':';
// ARROW : '->';
// EQUAL : '==';
// LE : '<=';
// GE : '>=';
// NOTEQUAL : '!=';
// AND : '&&';
// OR : '||';
// INC : '++';
// DEC : '--';
ADD : '+';
SUB : '-';
MUL : '*';
DIV : '/';
// BITAND : '&';
// BITOR : '|';
// CARET : '^';
MOD : '%';



// §3.8 Identifiers (must appear after all keywords in the grammar)

Identifier
	:	Letter LetterOrDigit*
	;

fragment
Letter
	:	[a-zA-Z$_] // these are the "java letters" below 0x7F
	;

fragment
LetterOrDigit
	:	[a-zA-Z0-9$_] // these are the "java letters or digits" below 0x7F
	;

//
// Whitespace and comments
//

WS  :  [ \t\r\n\u000C]+ -> skip
    ;

COMMENT
    :   '/*' .*? '*/' -> channel(HIDDEN)
    ;

LINE_COMMENT
    :   '//' ~[\r\n]* -> channel(HIDDEN)
    ;
