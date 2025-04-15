import {Produto} from "./produto";

export class Alimentos extends Produto{


  verificavalidade(validade:string) {
    const dataAtual = new Date();
    const dataformatada = dataAtual.toLocaleDateString('pt-BR');



    if (validade >= dataformatada) {
      return  console.log("esta dentro da validade");
    } else {
      return console.log("esta fora da validade");
    }
  }






}


