import { trigger, style, animate, transition } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { users } from 'src/app/services/app.service';
import { UserInMainService } from '../../../services/user-in-main.service';

@Component({
  selector: 'app-nav-bar-hamburger-menu',
  templateUrl: './nav-bar-hamburger-menu.component.html',
  styleUrls: ['./nav-bar-hamburger-menu.component.scss'],
  animations: [
    trigger('inOutAnimationModal', [
      transition(
        ':enter', 
        [
          style({ width: '60%', opacity:0.5 }),
          animate('0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940)',style({ width: '100%', opacity:0.5}))
        ]
      ),
      transition(
        ':leave', 
        [
          style({ width: '100%'}),
          animate('0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940)', style({ width: 0}))
        ]
      )
    ]),
    trigger('inOutAnimationMenu', [
      transition(
        ':enter', 
        [
          style({ width: 0}),
          animate('0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940)',style({ width: '250px'}))
        ]
      ),
      transition(
        ':leave', 
        [
          style({ width: '250px', opacity: 1}),
          animate('0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940)', style({ width: 0, opacity:0}))
        ]
      )
    ])
  ]
})
export class NavBarHamburgerMenuComponent implements OnInit {
  menuState = false
  @Input() itens = {
    profileButtons:[
      {text: '', route:'', checked:""},
    ],
    mainButtons:[
      {text: '', route:'', checked:""},
    ]
  }
  userLogged: users

  constructor(private userService:UserInMainService) { }

  ngOnInit(): void {
    this.userLogged = this.userService.userLogged 
  }

  menuToggle() {
    this.menuState = !this.menuState
  }
}
