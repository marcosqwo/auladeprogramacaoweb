export class Pessoa {
  nome:string;
  idade:number=0;


  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  dadospessoa(){
    console.log('nome da pessoa:',this.nome,'idade da pessoa:',this.idade);


  }

}
