import { Component } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template : '<button>(click)="showAlert()">Mostrar Alerta</button>'
})
export class AppComponent {
  title = 'project_U';
  showAlert() {
    swal.fire('Olá!','SweetAlert2 Está Funcionando','success');
  }

}
