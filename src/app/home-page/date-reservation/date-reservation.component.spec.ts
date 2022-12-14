import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateReservationComponent } from './date-reservation.component';

describe('DateReservationComponent', () => {
  let component: DateReservationComponent;
  let fixture: ComponentFixture<DateReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateReservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
