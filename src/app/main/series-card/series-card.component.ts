import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-series-card',
  templateUrl: './series-card.component.html',
  styleUrls: ['./series-card.component.scss']
})
export class SeriesCardComponent implements OnInit {

  constructor() { }

  @Input() cardImage = ''

  ngOnInit(): void {
  }

}
