import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Tarefaservice {

  private tarefas: string[]=[];


  constructor() {
  }
  addtarefa(tarefa : string) {
    this.tarefas.push(tarefa);
    console.log("tarefas cadastradas:",this.tarefas);
  }

}
