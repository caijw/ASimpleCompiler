# readme

编译Hello

```sh
cd antlr dir
antlr4 ./antlrtest/Hello.g4
javac ./antlrtest/Hello.java
 grun antlrtest.Hello tokens -tokens ./antlrtest/hello.play
```

编译PlayScript

```sh
antlr ./antlrtest/PlayScript.g4
javac ./antlrtest/*.java
grun antlrtest.PlayScript expression -gui
age + 10 * 2  + 10
^D
```
