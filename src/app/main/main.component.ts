import { Component, OnInit, Input, Output } from '@angular/core';
import { AppService, serie, seriesID } from '../app.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  userIDs:number[] = [];
  series:Array<serie> = [];
  cardImage:string = ''

  constructor(private appService:AppService) { }

  getSeriesID(userID:number){
    this.appService.getUserInfo(userID).subscribe(categories=>{
     const idsArray = Object.values(categories).flat()
      this.userIDs = idsArray
      this.getSeries(this.userIDs)
    })
    
  }
  
 
 getSeries(idsList:number[]){
    idsList.map((id,index)=>{
      this.appService.getSeriesInfo(id).subscribe((serie:serie)=>{
        serie.id = id
        serie.isKeepWatching = false
        let serieWithID:serie =  serie;
        let isKeepWatching:boolean = false

        serieWithID.id = Number(index+1)

        this.appService.getUserInfo(1).subscribe((categories:seriesID)=>{
          categories.keepWatching.includes(serieWithID.id)?isKeepWatching = true: isKeepWatching =  false
          serieWithID.isKeepWatching =  isKeepWatching
        })
        this.series.push(serieWithID)
      })
    })
  }


  ngOnInit(): void {
    
    this.getSeriesID(1)
    console.log(this.series)
  }

}
