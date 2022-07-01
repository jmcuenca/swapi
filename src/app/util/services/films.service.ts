import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {forkJoin, Observable, of} from 'rxjs';
import {finalize, map, tap} from 'rxjs/operators';
import {SWAPI_BASE_URL, ListResponse} from '../core/http';
import { Film } from '../interface/films.interface';
import {Character} from '../interface/character.interface';
import {LoaderService} from './loader.service';

const FILM_HTTP_URL_LENGTH = `${SWAPI_BASE_URL}/films/`.length;


@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  filmsList: Film[]=[];
  selectedFilm: Film;

  constructor(private http: HttpClient,
              private loaderService: LoaderService) {
  }

  getFilmsList(): Observable<Film[]> {
    if (this.filmsList && this.filmsList.length>0) {
      return of(this.filmsList);
    } else {
      this.loaderService.startLoading();
      return this.http.get<ListResponse<Film>>(`${SWAPI_BASE_URL}/films`)
        .pipe(map((films => films.results.map(film => {
              film.id = this.getFilmId(film.url);
              return film;
            })
          )),
          tap(films => this.filmsList = films),
          finalize(() => this.loaderService.finishLoading()));
    }
  }

  getFilmsByCharacter(character: Character) {
    return forkJoin(character.films.map(filmUrl => {
        this.loaderService.startLoading();
        return this.http.get<Film>(filmUrl)
          .pipe(map(film => {
            film.id = this.getFilmId(film.url);
            return film;
          }), finalize(() => this.loaderService.finishLoading()));
      }
    ));
  }

  getFilm(filmId: number): Observable<Film> {
    this.loaderService.startLoading();
    return this.http.get<Film>(`${SWAPI_BASE_URL}/films/${filmId}`)
      .pipe(map(film => {
        film.id = this.getFilmId(film.url);
        return film;
      }), finalize(() => this.loaderService.finishLoading()));
  }

  private getFilmId(filmUrl: string): number {
    return parseInt(filmUrl.substring(FILM_HTTP_URL_LENGTH, filmUrl.length - 1), 10);
  }
}
