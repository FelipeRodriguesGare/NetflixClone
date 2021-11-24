import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor (private router:Router, private http: AppService) { }
  
  ngOnInit() {
/*     this.router.navigate(['home']) */
  }
}
