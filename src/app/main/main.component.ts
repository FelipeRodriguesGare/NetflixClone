import { Component, OnInit, Input, Output } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  userIDs:number[] = [];
  series:Object[]  = []

  constructor(private appService:AppService) { }

  getSeriesID(userID:number){
    this.appService.getUserInfo(userID).subscribe(categories=>{
     const idsArray = Object.values(categories).flat()
      this.userIDs = idsArray
      this.getSeries(this.userIDs)
    })
    
  }

  getSeries(idsList:number[]){
    idsList.map(id=>{
      this.appService.getSeriesInfo(id).subscribe(serie=>{
        this.series.push(serie)
      })
    })
  }
  ngOnInit(): void {
    
    this.getSeriesID(1)
  }

}
