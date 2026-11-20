import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-list-thought',
  templateUrl: './list-thought.component.html',
  styleUrls: ['./list-thought.component.css']
})
export class ListThoughtComponent implements OnInit {

  listThoughts: Thought[] = [];
  page: number = 1;
  haveMoreThoughts: boolean = true;
  filter: string = '';
  favorite: boolean = false;
  listFavorite: Thought[] = [];
  title: string = 'Meu Mural';

  constructor(
    private thoughtService: ThoughtService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.thoughtService.list(this.page, this.filter, this.favorite).subscribe((thoughts) => {
      this.listThoughts = thoughts;
    });
  }

  loadMoreThoughts(): void {
    this.thoughtService.list(++this.page, this.filter, this.favorite).subscribe((thoughts) => {
      this.listThoughts.push(...thoughts);
      if (thoughts.length === 0) {
        this.haveMoreThoughts = false;
      }
    });
  }

  searchThoughts(): void {
    this.haveMoreThoughts = true;
    this.page = 1;
    this.thoughtService.list(this.page, this.filter, this.favorite).subscribe((thoughts) => {
      this.listThoughts = thoughts;
    });
  }

  reloadComponent(): void {
    this.favorite = false;
    this.page = 1;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }

  listFavorites(): void {
    this.title = 'Meus Favoritos';
    this.haveMoreThoughts = true;
    this.page = 1;
    this.favorite = true;
    this.thoughtService.list(this.page, this.filter, this.favorite).subscribe((thoughts) => {
      this.listThoughts = thoughts;
      this.listFavorite = thoughts;
    });
  }
}
