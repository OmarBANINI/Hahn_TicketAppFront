import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket.model';
import { NotificationService } from 'src/app/services/notification.service';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  tickets: Ticket[] = [];
  displayedColumns: string[] = ['ticketID', 'description', 'status', 'date', 'actions'];
  dataSource = new MatTableDataSource<Ticket>(this.tickets);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private ticketService: TicketService,private router:Router,private notificationservice:NotificationService) {}

  ngOnInit(): void {
    this.loadTickets();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator; // Move paginator assignment to ngAfterViewInit
  }

  loadTickets(): void {
    this.ticketService.getTickets().subscribe(
      (tickets: Ticket[]) => {
      this.tickets = tickets;
      this.dataSource.data = this.tickets;
    },
    (error) => {
      this.notificationservice.danger("Error External Server !");
    }
  );
  }

  deleteTicket(id: number): void {
    if (confirm('Are you sure you want to delete this ticket?')) {
      this.ticketService.deleteTicket(id).subscribe({
        next: () => {
          this.loadTickets();
        },
        error: (err) => {
          console.error('Deletion failed:', err);
          alert('Could not delete the ticket.');
        }
      });
    }
  }

  updateTicket(ticketID: number): void {
    this.router.navigate(['/add-ticket', ticketID]); // Navigate to ticket form with ticketID
  }
  applyFilter(event: Event, column: keyof Ticket): void {
    const filterValue = (event.target as HTMLInputElement).value; // Cast target to HTMLInputElement
    this.dataSource.filterPredicate = (data: Ticket, filter: string) => {
      const dataStr = data[column].toString().toLowerCase();
      return dataStr.includes(filter.trim().toLowerCase());
    };
    this.dataSource.filter = filterValue; // Set the filter to the value entered
  }
}
