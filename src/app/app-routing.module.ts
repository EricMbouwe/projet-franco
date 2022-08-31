import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LodgingPageComponent } from './lodging-page/lodging-page.component';

const routes: Routes = [
  {
    path: 'Acceuil',
    component: HomePageComponent
  },
  {
    path: 'Hebergement',
    component: LodgingPageComponent
  },
  { path: '', redirectTo: 'Acceuil', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
