export class Carro {
private _cor: string;
private _moodelo: string;
private _velocidade: number;


  getcor(): string {
    return this._cor;
  }

  setcor(cor: string) {
    this._cor=cor;
  }

  getmoodelo(): string {
    return this._moodelo;
  }

  setmoodelo(modelo: any) {
    this._moodelo = modelo;
  }

  getvelocidade(): number {
    return this._velocidade;
  }

  setvelocidade(velocidade: number) {
    this._velocidade = velocidade;
  }

  constructor(cor: string, moodelo: string) {
    this._cor = cor;
    this._moodelo = moodelo;
    this._velocidade = 0;
  }

   acelerar(): void {

    this._velocidade += 10;


   }
  freia(): void {
    this._velocidade -= 8;
}
  virar(direcao:string): void {

  }



}
