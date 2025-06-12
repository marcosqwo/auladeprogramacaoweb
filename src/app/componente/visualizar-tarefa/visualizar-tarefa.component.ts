import {Component, OnInit} from '@angular/core';
import {Tarefaservice} from "../../app-core/service/tarefaservice.service";
import {Tarefa} from "../../app-core/model/tarefa";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import Swal from "sweetalert2";
import {TarefaServiseApiService} from "../../app-core/service/tarefa-servise-api.service";



declare var $: any;

@Component({
  selector: 'app-visualizar-tarefa',
  templateUrl: './visualizar-tarefa.component.html',
  styleUrls: ['./visualizar-tarefa.component.css']
})
export class VisualizarTarefaComponent implements OnInit {


  tarefas: Tarefa[] = [];
  tarefasApi: Tarefa[] = [];
  form: FormGroup;
  loading: boolean = true;
  tarefaVisualizar:any;

  constructor(private tarefaService: Tarefaservice, private fb: FormBuilder, private tarefaServiceApi : TarefaServiseApiService ) {

    this.form = this.fb.group({
      tituloTarefa: ['', Validators.required],
      dataInicioTarefa: ['', Validators.required],
      dataCoclusaoTarefa: ['', Validators.required],
      statusTarefa: ['', Validators.required],
      descricaoTarefa: ['', Validators.required],
      id: [0],
      imagem: [''],
    });

    this.buscarTarefasApi();
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
      this.editarTarefa();
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
        this.form.value.statusTarefa,
        this.form.value.descricaoTarefa,
        undefined,
          this.form.value.imagem);

      this.tarefaService.adicionarTarefa(novaTarefa).then(resposta => {
        if(resposta > 0) {
          Swal.fire('Sucesso!', 'Tarefa Salva com sucesso!', 'success');
          this.form.reset();
          this.closeModal();
          this.listarTarefas();
        }

      }).catch(respostaErro => {
        Swal.fire('Não foi dessa vez!', 'Não foi possível salvar' + 'a tarefa , tente novamente mais tarde.', 'error')
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

    exluirtaTarefa(id:number){
    Swal.fire({
      title:'Tem certeza?',
      text:'Você não poderá reverter isso!',
      icon:'warning',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText:'Sim, deletar tarefa!',
      confirmButtonColor: '#3085d6',
    }).then(tipoBotao=>{
      if (tipoBotao.isConfirmed) {
        this.tarefaService.removerTarefa(id).then( ()=> {
          Swal.fire({
            title:'Sucesso!',
            text:'A tarefa foi deletada com sucesso!',
            icon:'success',
          });
          this.listarTarefas();
        })
      }
    }).catch(error=>{
      console.log(error);
      Swal.fire('Erro!','A tarefa não foi deletada,'+
      'tente novamente mais tarde.'+
        'Caso persistir contate o suporte.',
        'warning'
      );
    })



    }

   carregarDadosTarefa(tarefa:Tarefa){
    this.form.patchValue({
      tituloTarefa: tarefa.titulo,
      dataInicioTarefa:tarefa.dataInicio,
      dataCoclusaoTarefa:tarefa.dataConclusao,
      statusTarefa:tarefa.statusTarefa,
      descricaoTarefa:tarefa.descricaoTarefa,
      imagem:tarefa.imagem,
      id:tarefa.id
    });
    this.openModal();
   }

   editarTarefa(){
    if (this.form.valid) {
      const editarTarefa :Tarefa = new Tarefa(
        this.form.value.tituloTarefa,
        this.form.value.dataInicioTarefa,
        this.form.value.dataCoclusaoTarefa,
        this.form.value.statusTarefa,
        this.form.value.descricaoTarefa,
        this.form.value.id,
        this.form.value.imagem

      );
      this.tarefaService.atualizarTarefa(this.form.value.id,editarTarefa).then(
        resposta => {
          if (resposta === 1) {
            Swal.fire('Sucesso!', 'Tarefa Editada com sucesso!', 'success');
            this.form.reset();
            this.closeModal();
            this.listarTarefas();
          }else {
            Swal.fire('Atenção',
                        'Nenhuma tarefa encontrada ou'+
                          'nenhuma alteração realizada',
                            'info');


          }
        }
      ).catch(error => {
        Swal.fire('Cuidado!',
                    'Não foi possível editar a tarefa',
                      'error');
      });

    }else {
      Swal.fire('Cuidado!',
        'Alguns campos estão incorretos',
        'warning');
      this.marcartodoscomoclicados();
    }
   }
   onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (loadEvent) => {
          this.form.patchValue({imagem:loadEvent?.target?.result});
      };
      reader.readAsDataURL(file);
    }
   }

   buscarTarefasApi(){
      this.tarefaServiceApi.buscarTarefa().
      subscribe(respostaDoService =>{
        this.tarefasApi = respostaDoService;
      });

   }



  }

