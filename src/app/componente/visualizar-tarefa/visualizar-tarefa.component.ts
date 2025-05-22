import {Component, OnInit} from '@angular/core';
import {Tarefaservice} from "../../app-core/service/tarefaservice.service";
import {Tarefa} from "../../app-core/model/tarefa";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import Swal from "sweetalert2";
import swal from "sweetalert2";

declare var $: any;

@Component({
  selector: 'app-visualizar-tarefa',
  templateUrl: './visualizar-tarefa.component.html',
  styleUrls: ['./visualizar-tarefa.component.css']
})
export class VisualizarTarefaComponent implements OnInit {


  tarefas: Tarefa[] = [];
  form: FormGroup;
  loading: boolean = true;
  tarefaVisualizar:any;

  constructor(private tarefaService: Tarefaservice, private fb: FormBuilder) {

    this.form = this.fb.group({
      tituloTarefa: ['', Validators.required],
      dataInicioTarefa: ['', Validators.required],
      dataCoclusaoTarefa: ['', Validators.required],
      statusTarefa: ['', Validators.required],
      descricaoTarefa: ['', Validators.required],

    })

  }


  ngOnInit(): void {
    this.listarTarefas();
  }

  listarTarefas(): void {
    this.tarefaService.buscarTarefas().then(resposta => {
      this.tarefas = resposta;
      this.loading = false;
    })
  }

  openModal() {
    $('#add-tarefa').modal('show');
  }

  closeModal() {
    $('#add-tarefa').modal('hide');
  }

  submitForm() {
    if (this.form.value.id > 0) {

    } else {
      this.salvarTarefa();

    }
  }

  salvarTarefa(): void {
    if (this.form.valid) {
      const novaTarefa: Tarefa =
        new Tarefa(
        this.form.value.tituloTarefa,
        this.form.value.dataInicioTarefa,
        this.form.value.dataCoclusaoTarefa,
        this.form.value.status,
        this.form.value.descricao);

      this.tarefaService.adicionarTarefa(novaTarefa).then(resposta => {
        if(resposta > 0) {
          swal.fire('Sucesso!', 'Tarefa Salva com sucesso!', 'success');
          this.form.reset();
          this.closeModal();
          this.listarTarefas();
        }

      }).catch(respostaErro => {
        swal.fire('Não foi dessa vez!', 'Não foi possivel salvar' + 'a tarefa , tente novamente mais tarde.', 'error')
        console.log(respostaErro);
      });

    } else {
         console.log("Campos Invalidos Encontrados");
         Swal.fire("Atenção!", "Alguns campos do formulário" +
          " não estão corretos.", 'warning');
         this.marcartodoscomoclicados();
      }
  }


    marcartodoscomoclicados()
    {
      Object.values(this.form.controls).forEach(campo => {
        campo.markAsTouched();
      });
    }
    iscampovalido(inputName
  :
    string
  ):
    boolean
    {
      const campo: any = this.form.get(inputName);
      return campo && campo.touched && campo.invalid;
    }

    setTarefaAtual(t:Tarefa){
    this.tarefaVisualizar=t;

    }



  }

