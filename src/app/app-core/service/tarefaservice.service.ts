import {Injectable} from '@angular/core';
import {Tarefa} from "../model/tarefa";

@Injectable({
  providedIn: 'root'
})
export class Tarefaservice {

  private tarefas: string[] = [];
  private tarefateste: Tarefa [] = [];

  constructor() {
  }

  addtarefa(tarefa: string) {
    this.tarefas.push(tarefa);
    console.log("tarefas cadastradas:", this.tarefas);
  }

  populartabelateste(): Tarefa[] {
    let tarefas: Tarefa = new Tarefa('Estudar Angular', '24/04/2025', '24/05/2025', 'Em andamento', 'esta tarefa é destinada a estudar o framework do angular.', 0);
    let tarefas1: Tarefa = new Tarefa('Estudar Bootstrap', '17/04/2025', '30/05/2025', 'Em andamento', 'esta tarefa é destinada a estudar o framework do bootstrap.', 1);
    let tarefas2: Tarefa = new Tarefa('Desenvolver o Trabalho', '22/04/2025', '30/06/2025', 'Nova', 'esta tarefa é destinada a desenvolver sistema de aula.', 2);

    this.tarefateste.push(tarefas,tarefas1,tarefas2);

    return this.tarefateste;
  }
}
