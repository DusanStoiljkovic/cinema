import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieModel } from '../models/movie.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiURL = 'https://api.themoviedb.org/3/movie/now_playing';
  private apiKey: string = 'cbaa171a7f4ef557202086d196975b15';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<MovieModel[]> {
    // API ključ se šalje kao parametar u URL-u
    const url = `${this.apiURL}?api_key=${this.apiKey}&language=en-US&page=1`;
    
    return this.http.get<{ results: MovieModel[] }>(url).pipe(
      map(response => response.results)  // Uzima samo niz "results" iz odgovora
    );
  }
}