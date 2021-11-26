import { Component, DoCheck, OnInit } from '@angular/core';
import { AppService, users } from '../services/app.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: users[] = [{
    "id": 0,
    "name": '',
    "avatarUrl": ''
  }]
  edit = false

  constructor(private http: AppService) { }
  
  ngOnInit(): void {
    this.users = this.http.user.users
  }

  toggleEdit() {
    this.edit = !this.edit
  }

}
