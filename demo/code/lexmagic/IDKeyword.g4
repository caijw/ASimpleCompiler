grammar IDKeyword;

prog: stat+ ;

stat: 'if' expr 'then' stat
    | 'call' id ';'
    | ';'
    ;

expr: id ;

id  :   'if' | 'call' | 'then' | ID ;

// id : ID;

ID : [a-z]+ ;
WS : [ \r\n]+ -> skip ;
