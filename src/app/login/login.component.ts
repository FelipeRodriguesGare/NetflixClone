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

//Referente ao footer
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

  //Declaração dos inputs no form group
  constructor(private fb: FormBuilder, private appService: AppService, private route: Router, private authService: AuthService) {
    this.father = this.fb.group({
      emailPhone: [null,Validators.required],
      password: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(60)])]
    })
   }

  ngOnInit(): void {
  }

  logIn() {
    //A lógica para invalidar os campos é caso sejam inválidos e tenham sido tocados, porém, caso aperte login direto eles não terão sido tocados, a lógica abaixo é para isso.
    if(this.father.invalid){
      Object.keys(this.father.controls).forEach(camps=>{
        const camp = this.father.get(camps)
        camp?.markAllAsTouched();
      })
      return true;
    }
    //Realização do POST
    return this.appService.doLogin(this.father.get('emailPhone')?.value, this.father.get('password')?.value).subscribe((resultado) =>{ 
      this.appService.user = resultado;
      localStorage.setItem('token',resultado.token);
      this.route.navigate(['users'])
    })
  }

  //Ao realizar o click na tag <a> muda o status e mostra o conteudo do saiba mais.
  turnKhowMore(){
    this.knowMore = !this.knowMore;
  }
}
