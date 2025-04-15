export class ContaBancaria {
  private _numeroConta: number;
  private _saldoConta: number;
  private _titular:string;


  getnumeroConta(): number {
    return this._numeroConta;
  }

  setnumeroConta(value: number) {
    this._numeroConta = value;
  }

  getsaldoConta(): number {
    return this._saldoConta;
  }

  setsaldoConta(value: number) {
    this._saldoConta = value;
  }

  gettitular(): string {
    return this._titular;
  }

  settitular(value: string) {
    this._titular = value;
  }


  constructor(numeroConta: number, saldoConta: number, titular: string) {
    this._numeroConta = numeroConta;
    this._saldoConta = saldoConta;
    this._titular = titular;
  }
  sacar(valor:number): void {
    this._saldoConta-=valor;

  }


}
