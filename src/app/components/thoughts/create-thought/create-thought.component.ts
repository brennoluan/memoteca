import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought';
@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent implements OnInit {

  thought: Thought = {
    id: 1,
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'model1'
  }

  constructor() { }

  ngOnInit(): void {
  }

  createThought() {
    alert('Pensamento criado com sucesso!');
  }

  cancel() {
    alert('Cancelado');
  }
}
