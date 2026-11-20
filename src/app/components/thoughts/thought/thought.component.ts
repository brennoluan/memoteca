import { Component, Input, OnInit } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent implements OnInit {

  @Input() thought: Thought = {
    id: 0,
    conteudo: 'I love Angular',
    autoria: 'Brenno',
    modelo: 'modelo3',
    favorite: false
  }

  @Input() listFavorite: Thought[] = [];

  constructor(
    private thoughtService: ThoughtService
  ) { }

  ngOnInit(): void {
  }

  widthThought(): string {
    if (this.thought.conteudo.length > 256) {
      return 'pensamento-g';
    }

    return 'pensamento-p';
  }

  changeFavoriteIcon(): string {
    if (this.thought.favorite) {
      return 'ativo';
    }

    return 'inativo';
  }

  toggleFavorite(): void {
    this.thoughtService.toggleFavorite(this.thought).subscribe(() => {
      this.listFavorite.splice(this.listFavorite.findIndex(t => t.id === this.thought.id), 1)
    });
  }
}
