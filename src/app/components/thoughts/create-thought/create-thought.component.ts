import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent implements OnInit {

  thought: Thought = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  constructor(
    private thoughtService: ThoughtService,
    private router: Router

  ) { }

  ngOnInit(): void {
  }

  createThought() {
    this.thoughtService.create(this.thought).subscribe(() => {
      this.router.navigate(['/listarPensamento']);
    });
  }

  cancel() {
    this.router.navigate(['/listarPensamento']);
  }
}
