import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule
} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule, } from '@angular/material/icon';
import { MatPaginatorModule, } from '@angular/material/paginator';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CommonModule } from '@angular/common';
import { CharacterDetailsComponent } from './starwars/characters/characters-details/character-details.component';
import { CharactersListTableComponent } from './starwars/characters/characters-table/characters-table.component';
import { FilmDetailsComponent } from './starwars/films/films-details/films-details.component';
import { FilmsListComponent } from './starwars/films/films-list/films-list.component';
import { FilmsListTableComponent } from './starwars/films/films-table/films-table.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CharactersListComponent } from './starwars/characters/characters-list/characters-list.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FilmDetailsComponent,
    FilmsListComponent,
    FilmsListTableComponent,
    CharactersListComponent,
    CharactersListTableComponent,
    CharacterDetailsComponent,
    LoaderComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatPaginatorModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
