import { Component, Input, OnInit } from '@angular/core';


interface links {
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
    this.contactInfo ='0800-761-4631'
    this.links = [
    {text: 'Perguntas frequentes'},
    {text: 'Centro de ajuda', link: ''},
    {text: 'Conta', link: ''},
    {text: 'Imprensa', link: ''},
    {text: 'Relações com investidores', link: ''},
    {text: 'Carreiras', link: ''},
    {text: 'Resgatar cartão pré-pago', link: ''},
    {text: 'Comprar cartão pré-pago', link: ''},
    {text: 'Formas de assistir', link: ''},
    {text: 'Termos de uso', link: ''},
    {text: 'Privacidade', link: ''},
    {text: 'Prefêrencias de cookies', link: ''},
    {text: 'Informações corporativas', link: ''},
    {text: 'Entre em contato', link: ''},
    {text: 'Teste de velocidade', link: ''},
    {text: 'Avisos legais', link: ''},
    {text: 'Só na Netflix', link: ''}
    ]
  }

}
