#!/usr/bin/env node
import * as readline from "readline";
import { Script } from "./Script";
import { ASTNodeType, ASTNode } from "./ASTNode";
import { Syntax } from "./Syntax";

let verbose: boolean = false;

if (process.argv[2] === "-v") {
  verbose = true;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'script engine> '
});

rl.prompt();

const script = new Script(verbose);
const syntax = new Syntax();
let scriptText = "";

rl.on("line", (line) => {
  line = line.trim();
  if (line === "exit();") {
    console.log("good bye!");
    process.exit(0);
    return;
  }
  scriptText += line + "\n";
  if (/;$/.test(line)) {
    const tree: ASTNode = syntax.parse(scriptText);
    if (verbose) {
      syntax.dumpAST(tree, "");
    }
    script.evaluateASTNode(tree, "");
    scriptText = "";
  }
  rl.prompt();
}).on("close", () => {
  console.log("Have a great day!");
  process.exit(0);
});


