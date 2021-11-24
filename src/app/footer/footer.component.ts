import { Component, Input, OnInit } from '@angular/core';


export interface links {
  text:string,
  link?:string
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() links:links[] = []
  @Input() contactInfo = ''
  
  constructor() { }

  ngOnInit(): void {
  }

}
