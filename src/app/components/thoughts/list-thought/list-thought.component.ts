import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-thought',
  templateUrl: './list-thought.component.html',
  styleUrls: ['./list-thought.component.css']
})
export class ListThoughtComponent implements OnInit {

  listThoughts = [
    {
      content: 'Passo informações para o componente filho',
      author: 'Componente pai',
      model: 'modelo3'
    },
    {
      content: 'Minha propriedade é decorada com @Input',
      author: 'Componente filho',
      model: 'modelo2'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
