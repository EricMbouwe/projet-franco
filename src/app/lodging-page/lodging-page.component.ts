import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lodging-page',
  templateUrl: './lodging-page.component.html',
  styleUrls: ['./lodging-page.component.scss']
})
export class LodgingPageComponent implements OnInit {
  roomTypes = [
    {
      name: 'Petite chambre',
      capacity: '02 personnes',
      atouts: [
        'Petit dejeuner',
        'telephone',
        'Insonorisation',
        'Vue sur la ville'
      ],
      chambre: '01',
      tarif: '45000',
      image: 'assets/hero1.jpg',
      description: 'Une belle chambre'
    },
    {
      name: 'Petite chambre',
      capacity: '02 personnes',
      atouts: [
        'Petit dejeuner',
        'telephone',
        'Insonorisation',
        'Vue sur la ville'
      ],
      chambre: '01',
      tarif: '45000',
      image: 'assets/hero1.jpg',
      description: 'Une belle chambre'
    },
    {
      name: 'Petite chambre',
      capacity: '02 personnes',
      atouts: [
        'Petit dejeuner',
        'telephone',
        'Insonorisation',
        'Vue sur la ville'
      ],
      chambre: '01',
      tarif: '45000',
      image: 'assets/hero1.jpg',
      description: 'Une belle chambre'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
