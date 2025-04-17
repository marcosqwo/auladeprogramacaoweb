import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PaginaInicialComponent} from "./componente/pagina-inicial/pagina-inicial.component";
import {VisualizarTarefaComponent} from "./componente/visualizar-tarefa/visualizar-tarefa.component";

const routes: Routes = [
  {path:"",redirectTo:"pagina-inicial",pathMatch:"full"},
  {path:"pagina-inicial",component:PaginaInicialComponent},
  {path:"visualizar-tarefas",component: VisualizarTarefaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
