import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketDashbordComponent } from './ticket-dashbord.component';

describe('TicketDashbordComponent', () => {
  let component: TicketDashbordComponent;
  let fixture: ComponentFixture<TicketDashbordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketDashbordComponent]
    });
    fixture = TestBed.createComponent(TicketDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
