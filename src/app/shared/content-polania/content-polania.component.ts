import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaClienteComponent } from '../../listado/lista-cliente/lista-cliente.component';

@Component({
  selector: 'content-polania',
  standalone: true,
  imports: [
    RouterOutlet,
    ListaClienteComponent
  ],
  templateUrl: './content-polania.component.html',
  styleUrl: './content-polania.component.css'
})
export class ContentPolaniaComponent {

}
