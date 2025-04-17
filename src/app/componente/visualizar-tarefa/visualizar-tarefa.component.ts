import { Component, OnInit } from '@angular/core';
import {Tarefaservice} from "../../app-core/service/tarefaservice.service";

@Component({
  selector: 'app-visualizar-tarefa',
  templateUrl: './visualizar-tarefa.component.html',
  styleUrls: ['./visualizar-tarefa.component.css']
})
export class VisualizarTarefaComponent implements OnInit {

  constructor(private tarefaService: Tarefaservice) { }

    i: number = 0;

  ngOnInit(): void {
  }

  addtarefa(){
    this.tarefaService.addtarefa("TAREFA"+this.i);
    this.i++;

  }

}
