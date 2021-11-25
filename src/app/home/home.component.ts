import { Component, OnInit } from '@angular/core';
import { links } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  footerList: links[] = [
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
  constructor() { }

  ngOnInit(): void {
  }

}
