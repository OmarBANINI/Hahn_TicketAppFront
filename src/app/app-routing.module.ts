import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';

const routes: Routes = [
    { path: '',   component: TicketListComponent},
    { path: 'list-tickets',   component: TicketListComponent},
    { path: 'add-ticket/:id',   component: TicketFormComponent},
    { path: 'add-ticket',   component: TicketFormComponent},
    { path: '**',   component: TicketListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
