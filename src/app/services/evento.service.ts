import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Evento } from '../clases/evento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventoService {
  constructor(private http: HttpClient) {}

  getAllEvents(): Observable<Evento[]> {
    return this.http.get<Evento[]>(`${baseUrl}/events`);
  }

  public createEvent(newEvent: Evento): Observable<any> {
    console.log(newEvent.creator);
    return this.http.post(`${baseUrl}/events`, newEvent);
  }

  updateEventDetails(event: Evento): Observable<any> {
    const url = `${baseUrl}/events`;
    return this.http.put(url, event);
  }

  deleteEvent(eventId: number): Observable<any> {
    const url = `${baseUrl}/events/${eventId}`;
    return this.http.delete(url);
  }

  getEventById(eventId: number) {
    return this.http.get<Evento>(`${baseUrl}/events/${eventId}`);
  }
}
