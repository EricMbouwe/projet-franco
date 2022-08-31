import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.scss']
})
export class RoomCardComponent implements OnInit {
  @Input() roomTitle!: string;
  @Input() roomMax!: string;
  @Input() roomLit!: string;
  @Input() roomVue!: string;
  @Input() roomImage!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
