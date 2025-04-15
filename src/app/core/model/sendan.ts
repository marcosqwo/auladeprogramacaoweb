import {Carro} from "./carro";

export class Sedan  extends Carro{

  lugares:number;

  constructor(c:string,m:string,lugares:number) {

    super(c,m);
    this.lugares=lugares;

  }

  abrirportamalas():void {

    console.log("porta malas acionado");
  }




}
