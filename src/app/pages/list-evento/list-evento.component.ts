import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventoService } from '../../services/evento.service';
import { Evento } from '../../clases/evento';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-evento',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './list-evento.component.html',
  styleUrl: './list-evento.component.css',
})
export class ListEventoComponent implements OnInit {
  constructor(private eventoService: EventoService) {}
  eventos: Evento[];
  ngOnInit(): void {
    this.eventoService.getAllEvents().subscribe((eventos: Evento[]) => {
      this.eventos = eventos;
    });
  }
}
