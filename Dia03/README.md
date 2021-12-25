# ¿Cómo lo solucioné?

> Una respuesta relativamente sencilla, para entenderla hay que saber sobre Expresiones Regulares. No puedo dar una catedra al respecto, puedes aprender más de RegExp [aquí](https://www.w3schools.com/jsref/jsref_obj_regexp.asp).

Recibimos una cadena de caracteres y debemos regresar un booleano.
Ya que la cadena de caracteres puede contener tanto parentesis con contenido, y parentesis vacíos, chequemos para ambos siempre.

- Usemos la `RegExp`: `\(\)`, para espacios vacíos.
- Usamos la `RegExp`: `\([a-záéíóúñ]+\)` para parentésis con contenido.

Haciendo uso de `String.prototype.match()`. Si existe un espacio vacío, inmediatamente regresamos `false`, de lo contrario checamos por paréntesis con contenido, si existen regresamos `true`. Regresamos `false` para cualquier otro resultado.
