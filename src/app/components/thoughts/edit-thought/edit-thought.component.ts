import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThoughtService } from '../thought.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrls: ['./edit-thought.component.css']
})
export class EditThoughtComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private thoughtService: ThoughtService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.thoughtService.search(+id).subscribe(thought => {
        this.form = this.formBuilder.group({
          id: [thought.id],
          conteudo: [thought.conteudo, Validators.compose([Validators.required, Validators.pattern(/(.|\s)*\S(.|\s)*/)])],
          autoria: [thought.autoria, Validators.compose([Validators.required, Validators.minLength(3)])],
          modelo: [thought.modelo]
        });
      });
    }
  }

  editThought() {
    if (this.form.valid) {
      this.thoughtService.edit(this.form.value).subscribe(() => {
        this.router.navigate(['/listarPensamento']);
      });
    }
  }

  cancel() {
    this.router.navigate(['/listarPensamento']);
  }

  enableButton(): string {
    return this.form.invalid ? 'botao__desabilitado' : 'botao';
  }
}
