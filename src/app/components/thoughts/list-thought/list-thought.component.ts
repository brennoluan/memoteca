import { Component, OnInit } from '@angular/core';
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

  constructor(private thoughtService: ThoughtService) { }

  ngOnInit(): void {
    this.thoughtService.list(this.page).subscribe((thoughts) => {
      this.listThoughts = thoughts;
    });
  }

  loadMoreThoughts(): void {
    this.thoughtService.list(++this.page).subscribe((thoughts) => {
      this.listThoughts.push(...thoughts);
      if (thoughts.length === 0) {
        this.haveMoreThoughts = false;
      }
    });
  }
}
