// * 1
let arrayVacio = [];

// * 2
let arrayNumeros = [0 ,1, 2, 3, 4, 5, 6, 7, 8, 9];

// * 3
let arrayNumerosPares = [0, 2, 4, 6, 8];

// * 4
let arrayBidimensional = [[0, 1, 2],['a', 'b', 'c']];

// * 5
function suma (num1, num2){
    return num1 + num2;
}

// * 6
function potenciacion (a, b){
    return a**b;
}

// * 7
function separarPalabras(string){
   return string.split(' ')
}

// * 8
function repetirString(str, num) {
    return str.repeat(num)
}

// ! 9
// function ( num ){
//     for (let i=2; i<num; i++){
//        if ( num / i  === 0 && i )
//     }
// }

// ! 10
// function ordenarArray (arr){
//     arr.sort((a, b) => a - b);
//      return arr
// }

// !11
// function obtenerPares (arr){
//     let pares = [];
//     for (let i = 0; i < arr.length; i++) {
//        if(arr[i]%2==0){
//         pares[i] = pares.push(arr[i])
//        }
        
//     }
//     return pares
// }

// *12
// function pintarArray(arr) {
//     return arr.toString()
// }

// !13
// function arrayMapi(arr, multi) {
//     const arrFunct =[];
//     function multi(num){
//         return num*3
//     }
//     for (let i = 0; i < arr.length; i++) {
//         const resultado = multi(arr[i])
//         arrFunct.push(resultado)
//     }
// }

// !14

// *15
const arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

// *16
const holaMundo = ['Hola', 'Mundo'];

// *17
const loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];

// *18
const arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];

// *19
function multiplicacion(num1, num2) {
    return num1*num2
}

// *20
function division(num1, num2) {
    return num1/num2
}

// *21 
function esPar(num) {
    return num%2 ==0 ? true : false;
}

// *22
let arrayFunciones = [function suma (num1, num2){
    return num1 + num2;
}, function resta (num1, num2){
    return num1 - num2;
}, function multiplicacion (num1, num2){
    return num1 * num2;
}];


// *23
function ordenarArray2(arr) {
    arr.sort((a, b) => b - a);
    return arr
}

// !24
function obtenerImpares(arr) {
    let impares = [];
    for (let i = 0; i < arr.length; i++) {
       if(!arr[i]%2==0){
        impares[i] = impares.push(arr[i])
       }  
    }
    return impares
}

// *25
function sumarArray(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
        
    }
    return suma;
}

// !26
function multiplicarArray(arr) {
    let resultado = 0;
    for (let i = 0; i < arr.length; i++) {
        resultado *= arr[i];
        
    }
    return resultado;
}
