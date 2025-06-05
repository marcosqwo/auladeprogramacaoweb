export class Tarefa {
  id? : number;
  titulo: string;
  dataInicio: string;
  dataConclusao: string;
  statusTarefa: string;
  descricaoTarefa: string;


  constructor( titulo: string, dataInicio: string, dataConclusao: string, status: string, descricao: string ,id?: number) {
    this.titulo = titulo;
    this.dataInicio = dataInicio;
    this.dataConclusao = dataConclusao;
    this.statusTarefa = status;
    this.descricaoTarefa = descricao;
    this.id = id;
  }
}
