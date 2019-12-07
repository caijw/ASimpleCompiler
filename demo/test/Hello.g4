grammar Hello;

stat: assign;

INT: 'int';

ID: [a-z]+;

assign: ID '=' expr;

expr: INT;