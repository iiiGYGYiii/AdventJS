export default function isValid(letter: string): boolean {
  const parentesisCorrectos = letter.match(/\([a-záéíóúñ]+\)/);
  const parentesisVacios = letter.match(/\(\)/);
  return parentesisVacios ? false : parentesisCorrectos ? true : false;
}
