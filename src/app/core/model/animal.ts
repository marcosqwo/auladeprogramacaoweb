

export class Animal {
    private _nome: string;


  getnome(): string {
    return this._nome;
  }

  setnome(value: string) {
    this._nome = value;
  }

  constructor(nome: string) {
    this._nome = nome;
  }

  fazerbarulho(){
    console.log("animal faz algum tipo de barulho!!");

  }




}
