import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarPolaniaComponent } from './shared/navbar-polania/navbar-polania.component';
import { SidebarPolaniaComponent } from './shared/sidebar-polania/sidebar-polania.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ContentPolaniaComponent } from './shared/content-polania/content-polania.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    NavbarPolaniaComponent,
    SidebarPolaniaComponent,
    MatSlideToggleModule,
    ContentPolaniaComponent,
    MatGridListModule,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
    MatToolbar

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'listaClientes';
}
