# readme

## antlr

antlr 生成词法解析器和语法解析器版本

```sh
antlr -visitor  -Dlanguage=JavaScript   PlayScript.g4
```

查看antlr版本

```sh
java org.antlr.v4.Tool
```

安装antlr

```sh
brew install Antlr
export ANTLR_HOME="/usr/local/Cellar/antlr/4.7.2"
export CLASSPATH=".:$JAVA_HOME/lib/tools.jar:$JAVA_HOME/jre/lib:$ANTLR_HOME/antlr-4.7.2-complete.jar"
```

## grun

- -tokens 打印出词法符号流
- -tree 以LISP格式打印出语法树
- -gui 在对话框中以可视化方式显示语法分析树
- -ps file.ps 以`PostScript`格式生成可视化语法分析树，然后将其存储在file.ps。
- -encoding encodingname 指定输入文件的编码
- -trace 打印规则的名字以及进入和离开该规则是的词法符号
- -diagnostics 开启解析过程中的调试信息输出
- -SLL 使用另外一种更快但是功能稍弱的解析策略

示例用法:

```sh
grun Hello ID -tree
grun Hello tokens -tokens hello.play
grun Hello expression -gui
```
