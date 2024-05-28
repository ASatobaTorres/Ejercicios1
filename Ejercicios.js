// Claro, aquí tienes los enunciados de los ejercicios con ejemplos de lo que deben devolver:

// 1. *Número Par o Impar:* 
// - *Enunciado:* Crea una función que tome un número como argumento y determine si el número es par o impar.
// - *Ejemplo:* 
//   - Input: 5 
//   - Output: "Impar"
//   - Input: 8 
//   - Output: "Par"

function parImpar (numero) {
    if (numero %2 == 0)
        return "par" 
            return "impar"
}
console.log ("=====ejercicio 1");

console.log (parImpar (6) );
console.log (parImpar (3) );

// 2. *Invertir una Cadena:*
// - *Enunciado:* Crea una función que tome una cadena como argumento y devuelva la cadena invertida.
// - *Ejemplo:* 
//   - Input: "Hola" 
//   - Output: "aloH"

const invertirPlabra = (palabra) =>  {

    return palabra.split ('').reverse ('').join ('');
}
let hola= ("Andres");
let nuevaPlabra = invertirPlabra(hola);
console.log ("=====ejercicio 2");
console.log (nuevaPlabra);



// 3. *Contar Vocales:*
// - *Enunciado:* Crea una función que tome una cadena y cuente el número de vocales en la cadena.
// - *Ejemplo:* 
//   - Input: "Hola Mundo" 
//   - Output: 4

function contarVocales (cadenaVocales) {
    let vocalesEncontradas = 'aeiouAEIOU';
    let numeroDeVocales= 0;
    // console.log (numeroDeVocales);
    // console.log (vocales);

    for (let i = 0 ; i < cadenaVocales.length; i++)  {
    
        if (vocalesEncontradas.indexOf (cadenaVocales [i]) !== -1 ) {
            numeroDeVocales++;
        }
    } 
    return numeroDeVocales; // casi no doy por este marica que estaba metida en el bucle...
}

let vocal = ("Murcielago");
let contarLasVocales = contarVocales (vocal);

console.log ("=====ejercicio 3");

console.log (contarLasVocales);


// 4. *Números Primos:*
// - *Enunciado:* Crea una función que determine si un número es primo.
// - *Ejemplo:* 
//   - Input: 7 
//   - Output: true
//   - Input: 10 
//   - Output: false

// 5. *Fibonacci:*
// - *Enunciado:* Crea una función que genere los primeros n números de la secuencia de Fibonacci.
// - *Ejemplo:* 
//   - Input: 10 
//   - Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// 6. *Ordenar un Array:*
// - *Enunciado:* Crea una función que tome un array de números y lo ordene de menor a mayor sin usar el método sort.
// - *Ejemplo:* 
//   - Input: [5, 3, 8, 1, 2] 
//   - Output: [1, 2, 3, 5, 8]

// 7. *Palíndromo:*
// - *Enunciado:* Crea una función que determine si una palabra es un palíndromo.
// - *Ejemplo:* 
//   - Input: "anilina" 
//   - Output: true
//   - Input: "hola" 
//   - Output: false

// 8. *Factorial:*
// - *Enunciado:* Crea una función que calcule el factorial de un número.
// - *Ejemplo:* 
//   - Input: 5 
//   - Output: 120

// 9. *Eliminar Duplicados:*
// - *Enunciado:* Crea una función que elimine los elementos duplicados de un array.
// - *Ejemplo:* 
//   - Input: [1, 2, 2, 3, 4, 4, 5] 
//   - Output: [1, 2, 3, 4, 5]

// 10. *Contar Palabras:*
//  - *Enunciado:* Crea una función que cuente el número de palabras en una cadena.
//  - *Ejemplo:* 
//    - Input: "Hola, ¿cómo estás?" 
//    - Output: 3


