import { Component, OnInit } from '@angular/core';
import {Tarefaservice} from "../../app-core/service/tarefaservice.service";
import {Tarefa} from "../../app-core/model/tarefa";
declare var $: any;
@Component({
  selector: 'app-visualizar-tarefa',
  templateUrl: './visualizar-tarefa.component.html',
  styleUrls: ['./visualizar-tarefa.component.css']
})
export class VisualizarTarefaComponent implements OnInit {


  tarefas : Tarefa[] = [];

  constructor(private tarefaService: Tarefaservice) {
     this.tarefas  =   this.tarefaService.populartabelateste();

  }



  ngOnInit(): void {
  }

  addtarefa(){
    this.tarefaService.addtarefa("TAREFA");
    //this.i++;

  }
  openModal(){
    $('#add-tarefa').modal('show');
  }

  closeModal(){
    $('#add-tarefa').modal('hide');
  }
}
