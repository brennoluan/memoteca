import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent implements OnInit {


  form!: FormGroup;

  constructor(
    private thoughtService: ThoughtService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      conteudo: ['', Validators.compose([Validators.required, Validators.pattern(/(.|\s)*\S(.|\s)*/)])],
      autoria: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      modelo: ['modelo1']
    });
  }

  createThought() {
    if (this.form.valid) {
      this.thoughtService.create(this.form.value).subscribe(() => {
        this.router.navigate(['/listarPensamento']);
      });
    }
  }

  cancel() {
    this.router.navigate(['/listarPensamento']);
  }
}
