/*
Operadores lógicos:
&& -> AND -> E = todas as expressões precisam ser verdadeiras
|| -> OR -> OU = somente uma das expressões precisam ser verdadeiras
! -> NOT -> NÃO = inverte o valor das expresões
*/

const usuario = 'Luiz';
const senha = 123456;

const vaiLogar = usuario === 'Luiz' && senha === 123456;
console.log(vaiLogar);
