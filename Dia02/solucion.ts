interface Regalos {
  [key: string]: number;
}

export function listGiftsMultiline(letter: string): Regalos {
  const regalos = {} as Regalos;
  const trimmedLetter = letter.trim().split(/\s+/);
  const regalosNoTachados = trimmedLetter.filter(
    (regalo) => !regalo.startsWith("_")
  );
  for (let regalo of regalosNoTachados) {
    regalos[regalo] = regalos[regalo] ? regalos[regalo] + 1 : 1;
  }
  return regalos;
}

export default function listGifts(letter: string): Regalos {
  // ¡Tú puedes!
  return letter
    .trim()
    .split(/\s+/)
    .filter((v) => !v.startsWith("_"))
    .reduce<Regalos>(
      (p, c) =>
        p[c]
          ? {
              ...p,
              [c]: p[c] + 1,
            }
          : {
              ...p,
              [c]: 1,
            },
      {}
    );
}
