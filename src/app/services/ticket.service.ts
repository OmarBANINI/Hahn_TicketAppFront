import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket.model';
import { Observable } from 'rxjs';
import { API_URLS } from '../config/ApiURL';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) {}

  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(API_URLS.APIURL);
  }

  getTicket(id: number): Observable<Ticket> {
    return this.http.get<Ticket>(`${API_URLS.APIURL}/${id}`);
  }

  createTicket(ticket: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>(API_URLS.APIURL, ticket);
  }

  updateTicket(id: number, ticket: Ticket): Observable<void> {
    return this.http.put<void>(`${API_URLS.APIURL}/${id}`, ticket);
  }

  deleteTicket(id: number): Observable<void> {
    return this.http.delete<void>(`${API_URLS.APIURL}/${id}`);
  }
}
