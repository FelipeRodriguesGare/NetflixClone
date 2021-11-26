import { Component, Input, OnInit } from '@angular/core';
import { AppService, serie, seriesID } from 'src/app/app.service';

@Component({
  selector: 'app-category-carrousel',
  templateUrl: './category-carrousel.component.html',
  styleUrls: ['./category-carrousel.component.scss']
})
export class CategoryCarrouselComponent implements OnInit {
  @Input() category:string
  @Input() isKeepWatching:boolean

  userIDs:number[] = [];
  series:Array<serie> = [];
  serieObj: serie;

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
