/*
PRIMITIVOS (valores imutaveis): string, boolean, undefined, null, 
number, (bigint, symbol) = valores copiados

REFERÊNCIA (mutaveis): array, object e function - valores passados por referência

*/

let a = [1, 2, 3];
let b = a;

console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);