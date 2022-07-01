import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {Router} from '@angular/router';
import { Film } from 'src/app/util/interface/films.interface';
import { FilmsService } from 'src/app/util/services/films.service';


@Component({
  selector: 'app-films-table',
  templateUrl: './films-table.html',
  styleUrls: ['./films-table.component.scss']
})

export class FilmsListTableComponent {

  @Input() films: Film[];
  tableColumns = ['title', 'episode_id', 'director', 'producer'];
  @ViewChild(MatSort) sort: MatSort;
  constructor(public filmsService: FilmsService,
              private router: Router) {
  }
  public dataSource = new MatTableDataSource<Film>();
  showDetails(film: Film) {
    this.filmsService.selectedFilm = film;
    this.router.navigate(['/films', film.id]);
  }

}
