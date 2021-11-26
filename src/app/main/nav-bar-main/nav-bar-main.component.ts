import { ChangeDetectionStrategy } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService, users } from 'src/app/services/app.service';
import { UserInMainService } from '../../services/user-in-main.service';
import { WindowScrollService } from '../../services/window-scroll.service';

@Component({
  selector: 'app-nav-bar-main',
  templateUrl: './nav-bar-main.component.html',
  styleUrls: ['./nav-bar-main.component.scss']
})
export class NavBarMainComponent implements OnInit {
  screenHeight: number;
  screenWidth: number;
  scrollY$: Observable<number>;
  userLogged: users;
  navBackground = false;
  navButtons = {
    profileButtons:[
      {text: 'Conta', route:'', checked:""},
      {text: 'Centro de ajuda', route:'', checked:""},
      {text: 'Sair da Netflix', route:'', checked:""},
    ],
    mainButtons:[
      {text: 'Início', route:'', checked:"checked"},
      {text: 'Séries', route:'', checked:''},
      {text: 'Filmes', route:'', checked:''},
      {text: 'Bombando', route:'', checked:''},
      {text: 'Minha Lista', route:'', checked:''}
    ]
  }

  constructor(private userService:UserInMainService, private route: ActivatedRoute, private http: AppService, private scrollService: WindowScrollService) { 
    this.userLoggedIn()
    this.getScreenSize();
    this.scrollY$ = this.scrollService.scrollY$;
  }

  @HostListener('window:scroll', ['$event']) 
  onScroll(e: Event): void {
    this.scrollService.scrollY.next(this.getYPosition(e));
  }
  
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }

  getYPosition(e: Event): number {
    return (e.target as Element).scrollTop;
  }

  ngOnInit(): void {
  }

  userLoggedIn() {
    this.route.params.subscribe(params => {
      this.http.user.users.forEach((value)=>{
        if (params['id'] == value.id) {
          this.userLogged = value
          this.userService.userLogged = value
        }
      })
    });
  }

  onWindowScroll(event:Event) {
    if (scrollY>0) this.navBackground = true
    else this.navBackground = false
  }
}
