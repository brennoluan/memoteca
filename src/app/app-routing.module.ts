import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListThoughtComponent } from './components/thoughts/list-thought/list-thought.component';
import { CreateThoughtComponent } from './components/thoughts/create-thought/create-thought.component';

const routes: Routes = [
  { path: 'criarPensamento', component: CreateThoughtComponent },
  { path: 'listarPensamento', component: ListThoughtComponent },
  { path: '', redirectTo: 'listarPensamento', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
