import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hamburger-button',
  templateUrl: './hamburger-button.component.html',
  styleUrls: ['./hamburger-button.component.scss']
})
export class HamburgerButtonComponent implements OnInit {
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
