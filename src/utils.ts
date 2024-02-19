export function textMatchesSubstring(text: string, substring: string): boolean {
  // This function returns true if text contains substring
  // with an enhancement using startsWith and endsWith
  if (substring.startsWith(":")) {
    return text.startsWith(substring.slice(1));
  }
  if (substring.endsWith(":")) {
    return text.endsWith(substring.slice(0, -1));
  }
  return text.includes(substring);
}
