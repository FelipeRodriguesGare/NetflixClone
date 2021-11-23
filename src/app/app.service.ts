import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }

  doLogin(emailOrPhone:string,password:string){
    return this.http.post('https://private-3923c4-santandercoders809.apiary-mock.com/login',{
        emailOrPhone:emailOrPhone,
        password:password
    },{
      responseType:'text'
    })
  }

  getUserInfo(userID:number){
      return this.http.get(`https://private-3923c4-santandercoders809.apiary-mock.com/users/${userID}`)
  }

  getSeriesInfo(serieID:number){
      return this.http.get(`https://private-3923c4-santandercoders809.apiary-mock.com/series/${serieID}`) 
  }
  

}
