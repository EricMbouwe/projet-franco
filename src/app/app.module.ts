import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomePageComponent } from './home-page/home-page.component';
import { DateReservationComponent } from './home-page/date-reservation/date-reservation.component';
import { RoomCardComponent } from './home-page/room-card/room-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DateReservationComponent,
    RoomCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
