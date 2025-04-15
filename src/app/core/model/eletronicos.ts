import {Produto} from "./produto";

export class Eletronicos extends Produto{








  verificagarantia(garantia:string){

      const dataAtual = new Date();

      const dataformatada = dataAtual.toLocaleDateString('pt-BR');


      if (garantia >= dataformatada) {
        return  console.log("esta dentro da garantia");
      } else {
        return console.log("esta fora da garantia");
      }


  }



}
