class Pessoa {
    constructor (nome, idade){
        this.nome = nome,
        this.idade = idade
        console.log(this)
    }

    getNome(){
        return this.nome
    }

    getIdade(){
        return idade
    }

}

let caio = new Pessoa("caio", 28)

let joao = new Pessoa("joao", 20)

console.log(caio);
console.log(joao.getIdade());