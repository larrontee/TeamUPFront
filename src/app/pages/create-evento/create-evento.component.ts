import { Component, OnInit } from '@angular/core';
import { Evento } from '../../clases/evento';
import { FormsModule } from '@angular/forms';
import { User } from '../../clases/user';
import { UserService } from '../../services/user.service';
import { EventoService } from '../../services/evento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-evento',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-evento.component.html',
  styleUrl: './create-evento.component.css',
})
export class CreateEventoComponent implements OnInit {
  event: Evento;
  user: User;
  newEvent = {
    name: '',
    description: '',
    address: '',
    tipoEvent: '',
    date: new Date(),
  };
  constructor(
    private userService: UserService,
    private eventService: EventoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe((currentUser: any) => {
      this.user = currentUser as User;
      console.log('Usuario actual:', this.user);
    });
  }

  createEvent() {
    console.log(this.newEvent.name);
    this.event = new Evento();
    this.event.creator = this.user;
    this.event.name = this.newEvent.name;
    this.event.description = this.newEvent.description;
    this.event.address = this.newEvent.address;
    this.event.tipoEvent = this.newEvent.tipoEvent;
    this.event.date = this.newEvent.date;
    console.log(this.event.creator);
    this.eventService.createEvent(this.event).subscribe({
      next: (response: any) => {
        alert('Evento creado con éxito');
        this.router.navigate(['/eventDetails/', this.event.id]);
        // Aquí puedes agregar más lógica para manejar la respuesta, como redirigir al usuario a otra página
      },
      error: (error: any) => {
        console.error('Error al crear el evento:', error);
        // Aquí puedes agregar más lógica para manejar el error, como mostrar un mensaje de error al usuario
      },
    });
  }
}
