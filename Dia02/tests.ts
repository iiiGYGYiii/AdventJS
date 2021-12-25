import listGifts from "./solucion";

const carta = "bici coche balón _playstation bici coche peluche";

const regalos = listGifts(carta);
const respuestaEsperada = {
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1,
};

console.assert(
  Object.entries(regalos).reduce<boolean>(
    (p, c) => p && respuestaEsperada[c[0]] === c[1],
    true
  ),
  "Respuesta equivocada"
);
