export class Produto {
    private _nome:string;
    private _descricao:string;
    private _preco:number;


  getnome(): string {
    return this._nome;
  }

  setnome(value: string) {
    this._nome = value;
  }

  getdescricao(): string {
    return this._descricao;
  }

  setdescricao(value: string) {
    this._descricao = value;
  }

  getpreco(): number {
    return this._preco;
  }

  setpreco(value: number) {
    this._preco = value;
  }


  constructor(nome: string, descricao: string, preco: number) {
    this._nome = nome;
    this._descricao = descricao;
    this._preco = preco;
  }
}
