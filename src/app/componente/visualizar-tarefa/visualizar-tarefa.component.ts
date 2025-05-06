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
    if(this.form.valid){
      console.log(this.form.value);
      console.log("CADASTRO REALIZADO COM SUCESSO!");
      this.form.reset();
    }else {
      console.log("Campos Invalidos Encontrados");
      this.marcartodoscomoclicados();
    }



  }

marcartodoscomoclicados(){
    Object.values(this.form.controls).forEach(campo  => {
      campo.markAsTouched();
    });
}
iscampovalido(inputName:string):boolean{
    const campo : any = this.form.get(inputName);
    return campo && campo.touched && campo.invalid;
}


}

