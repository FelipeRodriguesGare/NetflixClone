import { serie } from '../../services/app.service';
import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from  "src/app/modal/modal.service"

@Component({
  selector: 'app-series-card',
  templateUrl: './series-card.component.html',
  styleUrls: ['./series-card.component.scss']
})
export class SeriesCardComponent implements OnInit {

  constructor(public modalService: ModalService) { }


  @Input() serieObj: serie;

  logText() {
  }

  onClick(event) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.src;
    let value = idAttr.nodeValue
  }

  secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 60);
    var m = Math.floor(d % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? "h " : "h ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? "min " : "min ") : "";
    return hDisplay + mDisplay;
  }

  capitalizeWords(arr) {
    let arrTreated = [];
    arr.map(el => {
      arrTreated.push(el.charAt(0).toUpperCase() + el.toLocaleLowerCase().substring(1));
    })
    return arrTreated
  }


  ngOnInit(): void {
  }


}
