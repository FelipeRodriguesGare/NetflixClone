import { Component, OnInit } from '@angular/core';
import { users } from '../services/app.service';
import { UserInMainService } from './user-in-main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  user:users

  constructor(private userService:UserInMainService) { }

  ngOnInit(): void {
    this.user = this.userService.userLogged
  }
}
