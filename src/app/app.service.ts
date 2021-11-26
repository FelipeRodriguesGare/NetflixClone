import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface userResponse{
  "token": string,
  "users": [
    users
  ]
}

export interface seriesID{
  popular:number[],
  keepWatching:number[]
}

export interface serie{
  id?:number,
  isKeepWatching?:boolean,
  cardImage: string,
  titleImage: string,
  backgroundImage: string,
  relevance: number,
  year: number,
  minAge: number,
  time?: number,
  season: unknown,
  description: string,
  cast: string[],
  genre: string[],
  scenes: string[]
}

export interface users {
  "id": number,
  "name": string,
  "avatarUrl": string
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) {

  }

  user: userResponse = {token: '', users: [{
    "id": 0,
    "name": '',
    "avatarUrl": ''
  }]};

  doLogin(emailOrPhone:string,password:string){
    return this.http.post<userResponse>('https://private-3923c4-santandercoders809.apiary-mock.com/login',{
        emailOrPhone:emailOrPhone,
        password:password
    })
  }

  getUserInfo(userID:number){
      return this.http.get(`https://private-3923c4-santandercoders809.apiary-mock.com/users/${userID}`)
  }

  getSeriesInfo(serieID:number){
      return this.http.get(`https://private-3923c4-santandercoders809.apiary-mock.com/series/${serieID}`)
  }


}
