const nome = "Ana Laura";
const sobrenome = "Martins";
const idade = 23;
const peso = 39;
const altura = 1.47;
let IMC;
const anoNascimento = 2000;

IMC = peso / (altura*altura);

console.log(`${nome} ${sobrenome} tem ${idade}, anos, pesa ${peso}kg`);
console.log(`tem ${altura} de altura e seu IMC é: ${IMC}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`);
