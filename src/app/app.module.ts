import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemploAulaComponent } from './componente/exemplo-aula/exemplo-aula.component';
import { CabecalhoComponent } from './componente/cabecalho/cabecalho.component';
import { RodapeComponent } from './componente/rodape/rodape.component';
import { TabelaComponent } from './componente/tabela/tabela.component';

@NgModule({
  declarations: [
    AppComponent,
    ExemploAulaComponent,
    CabecalhoComponent,
    RodapeComponent,
    TabelaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
