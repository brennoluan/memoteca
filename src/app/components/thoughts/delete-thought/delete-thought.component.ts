import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-thought',
  templateUrl: './delete-thought.component.html',
  styleUrls: ['./delete-thought.component.css']
})
export class DeleteThoughtComponent implements OnInit {

  thought: Thought = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
    favorite: false
  }

  constructor(
    private thoughtService: ThoughtService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.thoughtService.search(+id).subscribe(thought => this.thought = thought);
    }
  }

  deleteThought(): void {
    if (this.thought.id) {
      this.thoughtService.delete(this.thought.id).subscribe(() => {
        this.router.navigate(['listarPensamento']);
      });
    }
  }

  cancel(): void {
    this.router.navigate(['listarPensamento']);
  }
}
