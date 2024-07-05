import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Cliente } from '../interface/cliente';

@Component({
  selector: 'lista-cliente',
  standalone: true,
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent implements OnInit {
  clients: Cliente[] = [
    { name: 'Cliente 1', since: '2020-01-01', largestCredit: 10000 },
    { name: 'Cliente 2', since: '2019-05-15', largestCredit: 15000 },
    { name: 'Cliente 3', since: '2019-05-15', largestCredit: 15000 },
    // ... más clientes ...
  ];

  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 50];
  pageEvent: PageEvent | null = null;
  paginatedClients: Cliente[] = [];

  ngOnInit() {
    this.paginateClients({ pageIndex: 0, pageSize: this.pageSize, length: this.clients.length });
  }

  paginateClients(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.paginatedClients = this.clients.slice(startIndex, endIndex);
    this.pageEvent = event;
  }
}
