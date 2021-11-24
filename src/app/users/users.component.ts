import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService, users } from '../app.service';

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

  constructor(private router: Router, private http: AppService) { 

  }

  ngOnInit(): void {
    // this.http.doLogin('teste@teste', '123456').subscribe((response:string) => {
    //   let result = this.http.treatResponse(response)
    //   this.http.user = result
    //   this.users = result.users
    //   console.log(this.users)
    // })
    this.users = this.http.user.users
  }

  toggleEdit() {
    this.edit = !this.edit
  }

}
