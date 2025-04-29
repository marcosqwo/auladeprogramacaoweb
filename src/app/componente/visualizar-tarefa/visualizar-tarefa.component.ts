import { Component, OnInit } from '@angular/core';
import {Tarefaservice} from "../../app-core/service/tarefaservice.service";
import {Tarefa} from "../../app-core/model/tarefa";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
declare var $: any;
@Component({
  selector: 'app-visualizar-tarefa',
  templateUrl: './visualizar-tarefa.component.html',
  styleUrls: ['./visualizar-tarefa.component.css']
})
export class VisualizarTarefaComponent implements OnInit {


  tarefas : Tarefa[] = [];
  form: FormGroup;

  constructor(private tarefaService: Tarefaservice ,private fb: FormBuilder) {

    this.tarefas  =   this.tarefaService.populartabelateste();
     this.form = this.fb.group({
       tituloTarefa: ['', Validators.required],
       dataInicioTarefa: ['', Validators.required],
       dataCoclusaoTarefa: ['', Validators.required],
       statusTarefa: ['', Validators.required],
       descricaoTarefa: ['', Validators.required],

     })

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
  salvarTarefa():void{
    console.log(this.form.value);
  }





}

