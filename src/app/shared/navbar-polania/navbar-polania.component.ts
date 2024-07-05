import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbar } from '@angular/material/toolbar';


@Component({
  selector: 'navbar-polania',
  standalone: true,
  imports: [
    MatToolbar,
    MatButton,
    MatTabsModule,
    MatIcon
  ],
  templateUrl: './navbar-polania.component.html',
  styleUrl: './navbar-polania.component.css'
})
export class NavbarPolaniaComponent {

}
