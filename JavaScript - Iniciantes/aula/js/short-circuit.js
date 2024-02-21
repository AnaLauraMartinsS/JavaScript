/*
&& -> false && true = retorna o valor literal
|| -> true || flase = vai retornar o primeiro valor verdadeiro

true -> retorna o valor literal

VALORES AVALIADOS EM FALSO (QUE FINGE SER VALORES FALSOS):
FALSY
false -> retorna o valor literal
0
strings vazias -> '', "", ``
null undefined
NaN
*/


//function falaOi(){
//    return 'Oi';
//}
//
//let vaiExecutar = "roi ne";
//
//console.log(vaiExecutar && falaOi());

//console.log(0 || "Carol" || undefined || "Carlota Joaquina" || true);

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e);