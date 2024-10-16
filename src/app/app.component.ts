import { Component, OnInit } from '@angular/core';
import { TicketService } from './services/ticket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private ticketService:TicketService){

  }
  title = 'ticket-app';
  ngOnInit(): void {
    this.ticketService.getTickets().subscribe(
      (data) => {
        console.log(data);
      }
    )
  }
}
