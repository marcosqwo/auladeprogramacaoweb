import {Produto} from "./produto";

export class Livros extends Produto{


    preco:number = this.getpreco();
    precofinal:number = 0;



  CalcularDesconto(valordesconto:number){
      this.precofinal= this.preco *(1-valordesconto/100);
      return this.precofinal;

    }





}
