import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.scss']
})
export class RoomDetailComponent implements OnInit {
  @Input() room!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
