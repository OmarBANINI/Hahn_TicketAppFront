import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket.model';
import { NotificationService } from 'src/app/services/notification.service';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent {
  ticketForm: FormGroup;
  modeupdate=false;
  selectedTicket: Ticket | null = null; // To hold the ticket to be updated


  constructor(private fb: FormBuilder,private ticketService:TicketService,private notificationservice:NotificationService,private route:ActivatedRoute,private router:Router) {
    this.ticketForm = this.fb.group({
      description: ['', Validators.required],
      status: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const ticketID = this.route.snapshot.paramMap.get('id'); // Get the ID from route
    if (ticketID) {
      this.modeupdate=true;
      this.ticketService.getTicket(+ticketID).subscribe(ticket => {
        this.selectedTicket = ticket; // Set the selected ticket
        this.populateForm(ticket); // Populate the form with ticket data
      });
    }

  }
  populateForm(ticket: Ticket): void {
    this.ticketForm.patchValue({
      description: ticket.description,
      status: ticket.status
    });
  }

  onSubmit(): void {
    if (this.ticketForm.valid) {
      const ticketData: Ticket = this.ticketForm.value;
      if (this.modeupdate && this.selectedTicket) {
          // Update existing ticket
          ticketData.ticketID = this.selectedTicket.ticketID; // Keep the same ID
          ticketData.date = this.selectedTicket.date; // Keep the same date or update if needed
          this.ticketService.updateTicket( this.selectedTicket.ticketID,ticketData).subscribe(
            (updatedTicket) => {
              console.log('Ticket updated successfully:', updatedTicket);
              this.notificationservice.success("The ticket was updated successfully.");
              this.router.navigate(['/list-tickets']);
              this.clearForm();
            },
            (error) => {
              console.error('Error updating ticket:', error);
              this.notificationservice.danger("Error updating ticket !");
            }
          );
      }else{
          const newTicket: Ticket = this.ticketForm.value;
          newTicket.date=new Date().toISOString();
          newTicket.ticketID=0;
          this.ticketService.createTicket(newTicket).subscribe(
            (createdTicket) => {
              console.log('Ticket created successfully:', createdTicket);
              this.notificationservice.success("The ticket was created successfully.");
              this.router.navigate(['/list-tickets']);
              this.clearForm();
            },
            (error) => {
              console.error('Error creating ticket:', error);
              this.notificationservice.danger("Error creating ticket !");
            }
          );
      }
    }else{
      this.notificationservice.danger("Please fill in the form !");
    }

  }
  clearForm() {
    this.ticketForm.reset();
  }
}
