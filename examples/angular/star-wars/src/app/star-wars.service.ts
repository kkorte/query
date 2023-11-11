import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { lastValueFrom, map } from 'rxjs';

const parseIdFromUrl = (url: string) => {
  const parts = url.split('/').filter(Boolean);
  return parts[parts.length - 1];
}

type Film = {
  episode_id: number;
  title: string;
  release_date: string;
  url: string;
  film_id: number;
}

type Response<T> = {
  results: Array<T>;
}

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {
  #httpClient = inject(HttpClient);

  getFilms() {
    return injectQuery(() => ({
      queryKey: ['films'],
      queryFn: () => lastValueFrom(
        this.#httpClient.get<Response<Film>>('https://swapi.dev/api/films/').pipe(
          map((response) => ({
            results: response.results.map(film => ({
              ...film,
              film_id: parseIdFromUrl(film.url)
            }))
          }))
        )
      )
    }));
  }
}