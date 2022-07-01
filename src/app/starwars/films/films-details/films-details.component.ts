import {Component, OnInit} from '@angular/core';
import { Film } from 'src/app/util/interface/films.interface';
import { FilmsService } from 'src/app/util/services/films.service';
@Component({
  selector: 'app-film-details',
  templateUrl: './films-details.html',
  styleUrls: ['./films-details.component.scss']
})
export class FilmDetailsComponent implements OnInit {
  film: Film;

  constructor(public filmsService: FilmsService) {
  }

  ngOnInit() {
    this.film = this.filmsService.selectedFilm;
  }

}
