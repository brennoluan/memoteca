import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListThoughtComponent } from './components/thoughts/list-thought/list-thought.component';
import { CreateThoughtComponent } from './components/thoughts/create-thought/create-thought.component';
import { DeleteThoughtComponent } from './components/thoughts/delete-thought/delete-thought.component';

const routes: Routes = [
  { path: 'criarPensamento', component: CreateThoughtComponent },
  { path: 'listarPensamento', component: ListThoughtComponent },
  { path: 'pensamentos/excluirPensamento/:id', component: DeleteThoughtComponent },
  { path: '', redirectTo: 'listarPensamento', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
