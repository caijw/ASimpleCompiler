
export function isAlpha(ch: string): boolean {
  if (ch >= "A" && ch <= "Z" || ch >= "a" && ch <= "z") {
    return true;
  } else {
    return false;
  }
}

export function isDigit(ch: string): boolean {
  if (ch >= "0" && ch <= "9") {
    return true;
  } else {
    return false;
  }
}

export function isBlank(ch: string): boolean {
  if (ch === " " || ch === "\t" || ch === "\n") {
    return true;
  } else {
    return false;
  }
}

export function isNewLine(ch: string): boolean {
  return ch === "\n";
}
