import { Component } from '@angular/core';
import {Carro} from "./core/model/carro";
import {Sedan} from "./core/model/sendan";
import {ContaBancaria} from "./core/model/conta-bancaria";
import {Gato} from "./core/model/gato";
import {Galinha} from "./core/model/galinha";
import {Cachorro} from "./core/model/cachorro";
import {Moto} from "./core/model/moto";
import {Animal} from "./core/model/animal";
import {Circulo} from "./core/model/circulo";
import {Retangulo} from "./core/model/retangulo";
import {Forma} from "./core/model/forma";
import {Livros} from "./core/model/livros";
import {Eletronicos} from "./core/model/eletronicos";
import {Alimentos} from "./core/model/alimentos";
import {Pessoa} from "./core/model2/pessoa";
import {Funcionario} from "./core/model2/funcionario";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project_U';
/*
CRIAÇÃO DE OBJETOS
  gatinho:Gato;
  franguinho:Galinha;
  dog:Cachorro;

  minhamoto:Moto;
  meuCarro : Carro;
 conta : ContaBancaria;

    fazersomdoanimal(animal:Animal){
      animal.fazerbarulho();

    }
  meuanimal : Animal;


  falaraforma(forma:Forma){
    forma.calculararea();
  }

  redondo: Circulo;
  retangular: Retangulo;

  senhordosaneis : Livros;
  pcacer : Eletronicos;
  ovos:Alimentos;

  person:Pessoa;
  asalariado:Funcionario;








  constructor() {

    this.person = new Pessoa('joãozinho',15);

    this.person.dadospessoa();

    this.asalariado = new Funcionario('denilson',23,'gerente');

    this.asalariado.mostrarcargo();














  this.senhordosaneis = new Livros('senhor dos aneis','fantasia',1200);
  const valordesconto:number=this.senhordosaneis.CalcularDesconto(25);
  console.log(valordesconto);

  this.pcacer = new Eletronicos ('Pc da acer','computador de mesa',1200);
  this.ovos = new Alimentos('ovo','ovo de galinha',25);

  this.ovos.verificavalidade('28/03/2025')
  this.pcacer.verificagarantia('20/03/2025');




        this.redondo = new Circulo();
        this.retangular = new Retangulo();

        this.falaraforma(this.redondo);
        this.falaraforma(this.retangular);


  const meudog = new Cachorro("rex");
  const meucat = new Gato("gatinho gatinho pspspsps");
  this.meuanimal = new Animal("cavalo");


  this.fazersomdoanimal(meudog);
  this.fazersomdoanimal(meucat);
  this.fazersomdoanimal(this.meuanimal);
  console.log(this.meuanimal.getnome());



  this.minhamoto= new Moto('cinza','honda fan');
  this.minhamoto.setvelocidade(300);








    this.gatinho = new Gato('geraldo',12);
         this.franguinho = new Galinha('gertrudez', 2);
         this.dog = new Cachorro('mauro milton', 2);

         this.gatinho.setsom('miau');
         this.dog.setsom('auau');
         this.franguinho.setsom('piu piu');
         this.dog.setdirecao('norte');
         this.franguinho.setdirecao('sul')
         this.gatinho.setdirecao('leste');






    /!*this.meuCarro = new Carro('vermelho','civic');*!/
/!*  console.log('esse é meu carro:',this.meuCarro.getcor());

  console.log('esse é o modelo do meu carro:',this.meuCarro.getmoodelo());

  const meuSedan = new Sedan('vermelho','accord',5);

    meuSedan.abrirportamalas();*!/

    /!*this.conta = new ContaBancaria(1523,1500,'marcos');
    console.log(this.conta);
    this.conta.sacar(500);*!/


  }
  mudarcor(): void {
    this.meuCarro.setcor('azul');

  }


*/

}
