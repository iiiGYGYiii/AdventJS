# ¿Cómo lo solucioné?

La solución es relativamente sencilla, podemos filtrar todo el array con `Array.prototype.filter()` para sólo tener aquellos objetos cuya propiedad `color` sea `rojo`, además la propiedad `name` incluya las letras `a` Y `n`, incluyendo mayúsculas y minúsculas. Esta última parte la podemos realizar:

1. Usamos `String.prototype.toLowerCase()` para tener la cadena de caracteres sólo en minúsuclas.
2. Usamos `String.prototype.includes()` para verificar que la propiedad `name` _(que es un string)_ incluya estos caracteres.
