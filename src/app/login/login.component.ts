import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';
import	{ links } from './../footer/footer.component'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  contactInfo:string = '0800-761-4631'
  footerInfo:links[] = [
    {text:"Perguntas frequentes", link:""},
    {text:"Centro de ajuda", link:""},
    {text:"Termos de uso", link:""},
    {text:"Privacidade", link:""},
    {text:"Preferências de cookies", link:""},
    {text:"Informações corporativas", link:""},
  ]

  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }

  logIn(emailPhone: string, password:string) {
    return this.appService.doLogin(emailPhone, password).subscribe((resultado) =>{ 
      let result = this.appService.treatResponse(resultado)
      this.appService.user = result;  
      console.log(result);
      
    })
  }
}
