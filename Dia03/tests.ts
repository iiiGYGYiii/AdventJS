import isValid from "./solucion";

const truthy = [
  "bici coche (balón) bici coche peluche",
  "(muñeca) consola bici",
];

const falsy = [
  "bici coche (balón bici coche",
  "peluche (bici [coche) bici coche balón",
  "(peluche {) bici",
  "() bici",
];

console.assert(
  truthy.reduce<boolean>((p, c) => p && isValid(c), true),
  "Tests truthy no pasaron"
);

console.assert(
  falsy.reduce<boolean>((p, c) => p && !isValid(c), true),
  "Tests falsy no pasaron"
);
