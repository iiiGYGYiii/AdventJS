# ¿Cómo lo solucioné?

> He proporcionado dos soluciones, una solución de una sola línea `listGifts`, que no es fácil de leer, y una solución multi-línea `listGiftMultiline`. La solución de una sola línea será más entendible una vez sepamos como trabaja `listGiftMultiline`.

## Solución listGiftMultiline

Vamos a regresar un solo objeto de tipo con elementos de tipo `key: number`, declarado como `regalos`.
El primer objetivo será obtener aquellos regalos que no inicien con un guión bajo (`_`), para ello necesitamos un arreglo con los regalos como elementos del arreglo. Primero removemos los posibles espacios a los extremos de la cadena de caracteres con la funcion `String.prototype.trim()`. Siguiente, hacemos uso de `String.prototype.split()`, que acepta como argumento un objeto `RegExp` o un `string`, que indica el separador de la cadena de caracteres, y nos regresa un `Array`. Podemos hacer uso de la `RegExp`: `/\s+/` para separar en los espacios en blanco. Al `Array` obtenido lo podemos filtrar `Array.prototype.filter()` y obtener aquellos valores que NO empiecen con (`_`), usamos `String.prototype.startsWith()`. Iteramos sobre este último array, para añadir, o incrementar(en caso de que ya exista en el objeto `regalos`), los elementos al objeto `regalos`.

## Solución listGifts

Todos los metodos usados en la solución anterior pueden ser encadenados, hasta obtener el Array filtrado, hacemos uso del método `Array.prototype.reduce()` para iterar sobre el mismo y regresar sólo un objeto con los valores deseados.
