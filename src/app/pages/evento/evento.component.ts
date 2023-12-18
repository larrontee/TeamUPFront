import { Component, OnInit } from '@angular/core';
import { Evento } from '../../clases/evento';
import { FormsModule } from '@angular/forms';
import { EventoService } from '../../services/evento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../clases/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-evento',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './evento.component.html',
  styleUrl: './evento.component.css',
})
export class EventoComponent implements OnInit {
  event: Evento;
  user: User;
  // participants: User[];
  constructor(
    private eventService: EventoService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('eventId');
    const numId = Number(id);
    this.eventService.getEventById(numId).subscribe((event: Evento) => {
      this.event = event;
      // this.participants = this.event.participants;
    });

    this.userService.getCurrentUser().subscribe((currentUser: any) => {
      this.user = currentUser;
      console.log('current: ', this.user);
    });
  }

  addUser() {
    let participa = this.event.participants.some(
      (participant) => participant.id === this.user.id
    );

    if (participa) {
      alert('Ya estas en el evento');
    } else {
      this.event.participants.push(this.user);
      this.eventService.updateEventDetails(this.event).subscribe((response) => {
        console.log(response); // Asegúrate de que estás manejando la respuesta
      });
    }
  }

  deleteUser() {
    let participa = this.event.participants.some(
      (participant) => participant.id === this.user.id
    );

    if (participa) {
      this.event.participants = this.event.participants.filter(
        (participant) => participant.id !== this.user.id
      );
      this.eventService.updateEventDetails(this.event).subscribe((response) => {
        console.log(response); // Asegúrate de que estás manejando la respuesta
      });
    } else {
      alert('El usuario no está en el evento');
    }
  }

  deleteEvent() {
    if (this.user.id === this.event.creator.id) {
      this.eventService.deleteEvent(this.event.id).subscribe((response) => {
        console.log(response); // Asegúrate de que estás manejando la respuesta
        this.router.navigate(['/listaEventos']);
      });
    }
  }
}
