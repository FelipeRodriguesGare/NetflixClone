import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { users } from '../../services/app.service';


@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() user:users = {
    "id": 0,
    "name": '',
    "avatarUrl": ''
  }
  @Input() edit=false

  constructor(private route: Router) { }

  ngOnInit(): void {  }

  userEnterAplication() {
    this.route.navigate(['main',this.user.id])
  }
}
