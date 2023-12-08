import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  photoCover: string = "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/12/robert-downey-jr-homem-de-ferro.jpg?w=1024&h=576&crop=1"
  contentTitle: string = "Minha Notícia"
  contentDescription: string = "Olá, mundo"

  constructor() {}

  ngOnInit(): void {

  }
}
