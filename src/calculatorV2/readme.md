# readme

antlr 生成词法解析器和语法解析器版本

```sh
antlr -visitor  -Dlanguage=JavaScript   PlayScript.g4
```

查看antlr版本

```sh
java org.antlr.v4.Tool
```
安装antlr

```
brew install Antlr
export ANTLR_HOME="/usr/local/Cellar/antlr/4.7.2"
export CLASSPATH=".:$JAVA_HOME/lib/tools.jar:$JAVA_HOME/jre/lib:$ANTLR_HOME/antlr-4.7.2-complete.jar"
```

