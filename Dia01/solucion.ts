interface Oveja {
  name: string;
  color: string;
}

export default function contarOvejas(ovejas: Oveja[]): Oveja[] {
  // ¡No olvides compartir tu solución en redes!
  return ovejas.filter(
    (oveja) =>
      oveja.color === "rojo" &&
      oveja.name.toLowerCase().includes("a") &&
      oveja.name.toLowerCase().includes("n")
  );
}
