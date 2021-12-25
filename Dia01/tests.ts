import contarOvejas from "./solucion";

const ovejas = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
  { name: "AAAAAaaaaa", color: "rojo" },
  { name: "Nnnnnnnn", color: "rojo" },
];

const ovejasFiltradas = contarOvejas(ovejas);

console.assert(
  JSON.stringify(ovejasFiltradas) ===
    JSON.stringify([
      { name: "Navidad", color: "rojo" },
      { name: "Ki Na Ma", color: "rojo" },
    ]),
  "No se ha pasado el test."
);
