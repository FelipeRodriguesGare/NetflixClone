import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-button',
  templateUrl: './navbutton.component.html',
  styleUrls: ['./navbutton.component.scss']
})
export class NavbuttonComponent implements OnInit {
  @Input() text: string = ''
  @Input() radioGroup: string = ''
  @Input() route: string = ''
  @Input() checked: string = ''

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  changeRoute() {
    if (this.route) this.router.navigate([this.route])
  }

}
