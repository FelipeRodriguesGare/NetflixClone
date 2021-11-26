import { AuthService } from './../auth/auth.service';
import { Router } from '@angular/router';
import { AppService, users, userResponse } from './../app.service';
import { Component, OnInit, Input } from '@angular/core';
import	{ links } from './../footer/footer.component'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


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

  father: FormGroup;
  knowMore: boolean = false;

  constructor(private fb: FormBuilder, private appService: AppService, private route: Router, private authService: AuthService) {
    this.father = this.fb.group({
      emailPhone: [null,Validators.required],
      password: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(60)])]
    })
   }

  ngOnInit(): void {
  }

  logIn() {
    if(this.father.invalid){
      Object.keys(this.father.controls).forEach(camps=>{
        const camp = this.father.get(camps)
        camp?.markAllAsTouched();
      })
      return true
    }
    return this.appService.doLogin(this.father.get('emailPhone')?.value, this.father.get('password')?.value).subscribe((resultado) =>{
      this.appService.user = resultado;
      localStorage.setItem('token',resultado.token);
      this.route.navigate(['users'])
    })
  }

  turnKhowMore(){
    this.knowMore = !this.knowMore;
    console.log(this.knowMore)
  }
}
