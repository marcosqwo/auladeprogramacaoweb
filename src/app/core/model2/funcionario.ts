import {Pessoa} from "./pessoa";

export class Funcionario extends Pessoa {
  cargo:string;


  constructor(nome: string, idade: number, cargo: string) {
    super(nome, idade);
    this.cargo = cargo;
  }

  mostrarcargo(){

    console.log('nome da pessoa:',this.nome,'idade da pessoa:',this.idade,'cargo da pessoa:',this.cargo);


  }


}
