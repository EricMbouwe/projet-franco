import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  vistesImages = [
    'assets/visit1.jpg',
    'assets/visit2.jpg',
    'assets/visit3.jpg'
  ]

  eventImages = [
    'assets/visit1.jpg',
    'assets/visit2.jpg',
    'assets/visit3.jpg',
    'assets/visit1.jpg',
    'assets/visit2.jpg',
    'assets/visit3.jpg'
  ]

  rooms = [
    {
      title: 'Chambre standart de luxe',
      max: '3 adultes',
      lit: '2 places',
      vue: 'Piscine ou rue',
      image: ''
    },
    {
      title: 'Suite presidentielle',
      max: '3 adultes',
      lit: '3 places',
      vue: 'Piscine ou rue',
      image: ''
    },
    {
      title: 'Suite Luxe',
      max: '4 adultes',
      lit: '2 places',
      vue: 'Piscine ou rue',
      image: ''
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
