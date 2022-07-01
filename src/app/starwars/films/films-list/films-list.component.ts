import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import { Film } from 'src/app/util/interface/films.interface';
import { FilmsService } from 'src/app/util/services/films.service';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.html',
  styleUrls: ['./films-list.component.scss']
})
export class FilmsListComponent implements OnInit, OnDestroy {
  public films: Film[];
  subscription: Subscription;

  constructor(public filmsService: FilmsService) {
  }

  ngOnInit() {
    this.subscription = this.filmsService.getFilmsList().subscribe(data => {
      this.films = data;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
