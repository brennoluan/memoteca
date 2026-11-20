import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Thought } from './thought';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThoughtService {

  private readonly API = 'http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) { }

  list(page: number, filter: string, favorite: boolean): Observable<Thought[]> {
    let params = new HttpParams().set('_page', page).set('_limit', 6);

    if (filter.trim().length > 2) {
      params = params.set('q', filter);
    }

    if (favorite) {
      params = params.set('favorite', 'true');
    }

    return this.http.get<Thought[]>(this.API, { params });
  }

  create(thought: Thought): Observable<Thought> {
    return this.http.post<Thought>(this.API, thought);
  }

  edit(thought: Thought): Observable<Thought> {
    return this.http.put<Thought>(`${this.API}/${thought.id}`, thought);
  }

  delete(id: number): Observable<Thought> {
    return this.http.delete<Thought>(`${this.API}/${id}`);
  }

  search(id: number): Observable<Thought> {
    return this.http.get<Thought>(`${this.API}/${id}`);
  }

  toggleFavorite(thought: Thought): Observable<Thought> {
    thought.favorite = !thought.favorite;
    return this.edit(thought);
  }
}
