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
console.log ("===== ejercicio 1 =====");

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

function numerosPrimos (numeros)  {
    if (numeros <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt (numeros); i++ ) {   // sqrt raiz cuadrada de un numero
        if (numeros % i === 0) {
            return false;
        }
    }
        return true;
}

console.log ("===== ejercicio 4 ======");
let primo = 24;

if (numerosPrimos (primo)) {
    console.log(primo + " es un número primo.");
} else {
    console.log(primo + " no es un número primo.");
}

// 5. *Fibonacci:*
// - *Enunciado:* Crea una función que genere los primeros n números de la secuencia de Fibonacci.
// - *Ejemplo:* 
//   - Input: 10 
//   - Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

console.log ("===== ejercicio 5 ======");

function secuenciaFibonacci (n){         
    if (n <= 0) {
        return [];
}  
    if (n === 1) {
        return [0];
}
let secuencia = [0, 1]          // generamos una secuencia llamando a los dos primeros valores, retornandolos en un arreglo, esto con el fin de sumar en el ciclo for los valores mayores a n

for (let i = 2; i < n ; i++) {
    secuencia.push (secuencia [(i - 1)] + secuencia [(i - 2 )]) // sumatoria de las secuencias 
    }
    return secuencia;                           // retornamos la secuencia
};
const n = 10;
const resultado = secuenciaFibonacci(n);
console.log (resultado);

// 6. *Ordenar un Array:*
// - *Enunciado:* Crea una función que tome un array de números y lo ordene de menor a mayor sin usar el método sort.
// - *Ejemplo:* 
//   - Input: [5, 3, 8, 1, 2] 
//   - Output: [1, 2, 3, 5, 8]

console.log ("===== ejercicio 6 ======");

function arregloDeArray (arr) {
    let n = arr.length;
    let intercambio;

    do {
        intercambio = false;
        for (let i = 0; i < n - 1 ; i++) {
            if (arr [i] > arr [i + 1]) {
                let temp = arr[i]
                    arr[i] = [arr + 1]
                    [arr + 1] = temp;
        intercambio= true;
            }
        }
            n--;            

    } while (intercambio);

    return arr;
};

const array = [5, 3, 8, 1, 2];
const resultado1 = arregloDeArray(array);
console.log(resultado1); 

// 7. *Palíndromo:*
// - *Enunciado:* Crea una función que determine si una palabra es un palíndromo.
// - *Ejemplo:* 
//   - Input: "anilina" 
//   - Output: true
//   - Input: "hola" 
//   - Output: false

function esPalindromo (word) {

    word = word.toLowerCase();

    const reverso = word.split('').reverse().join('');

    return word === reverso;

}
console.log ("===== ejercicio 7 ======");
console.log(esPalindromo("anilina"));
console.log(esPalindromo("ANA"));


// 8. *Factorial:*
// - *Enunciado:* Crea una función que calcule el factorial de un número.
// - *Ejemplo:* 
//   - Input: 5 
//   - Output: 120
console.log ("===== ejercicio 8 ======");

function factorial(n)  { 
        if (n === 0 || n === 1) {
            return 1;
        }
    
    let result = 1;

        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }

console.log (factorial (4));
let numero = 4;
console.log (`El factorial de ${numero} es: ${factorial(numero)}`);

// 9. *Eliminar Duplicados:*
// - *Enunciado:* Crea una función que elimine los elementos duplicados de un array.
// - *Ejemplo:* 
//   - Input: [1, 2, 2, 3, 4, 4, 5] 
//   - Output: [1, 2, 3, 4, 5]
console.log ("===== ejercicio 9 ======");

function eliminarDuplicados (arr) {
// crer un arreglo vacio para almacenar los elementos unicos
    let uniqueArray = [];

        for (let i = 0; i < arr.length; i++) {
            // si el elemnto unico no esta aca, añadirlo
            if (!uniqueArray.includes(arr[i])) {

                uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}

const arreglos= ['1,3,4,5,6,4,6,3,1'];
const duplica1 = eliminarDuplicados (arreglos);
console.log (duplica1); // ayuda chat.gpt :C


// 10. *Contar Palabras:*
//  - *Enunciado:* Crea una función que cuente el número de palabras en una cadena.
//  - *Ejemplo:* 
//    - Input: "Hola, ¿cómo estás?" 
//    - Output: 3
console.log ("===== ejercicio 10 ======");




