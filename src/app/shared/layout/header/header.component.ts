import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navRoutes = [
    'Acceuil',
    'Hebergement',
    'Evenements',
    'Services',
    'Contact'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
