import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsListComponent } from './starwars/films/films-list/films-list.component';
import { FilmDetailsComponent } from './starwars/films/films-details/films-details.component';
import { CharactersListComponent } from './starwars/characters/characters-list/characters-list.component';
import { CharacterDetailsComponent } from './starwars/characters/characters-details/character-details.component';
import { CanActivateFilmService } from './util/services/activate/activate-films.service';
import { CanActivateCharacterService } from './util/services/activate/activate-character.service';

const routes: Routes = [
  { path: 'films', component: FilmsListComponent },
  { path: 'films/:filmId', component: FilmDetailsComponent, canActivate: [CanActivateFilmService] },
  { path: 'characters', component: CharactersListComponent },
  { path: 'characters/:characterId', component: CharacterDetailsComponent, canActivate: [CanActivateCharacterService] },
  { path: '**', redirectTo: '/films', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
