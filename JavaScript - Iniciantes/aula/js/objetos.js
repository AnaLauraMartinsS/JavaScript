//function criarPessoa (nome, sobrenome, idade){
//    return {
//        nome, sobrenome, idade
//    };
//}
//
//const pessoa1 = criarPessoa("Ana", "Martins", 23);
//console.log(pessoa1);


const pessoa1 = {
    nome: "Ana",
    sobrenome: "Martins",
    idade: 23,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} está falando: "Roi"`);
        console.log(`A minha idade é: ${this.idade}`);
    },

    incrementaIdade(){
        this.idade++;
    }
}

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();