import {Carro} from "./carro";

export class Moto extends Carro{


  empinar(res:boolean):string{
  if(res == true){
    return 'a moto esta empinando';
  }else{
    return 'a moto não esta empinando';
  }
  }
  ligaralarme(alarme:boolean):string{
    if(alarme == true){
      return 'o alarme esta ligado';
    }else{
      return 'o alarme esta desligado';
    }
  }




}
