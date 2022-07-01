import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import { Character } from 'src/app/util/interface/character.interface';
import { CharactersService } from 'src/app/util/services/characters.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit, OnDestroy {
  characters: Character[];
  charactersCount: number;
  subscription: Subscription;

  constructor(public charactersService: CharactersService) {
  }

  ngOnInit() {
    this.subscription = this.charactersService.getCharactersList().subscribe(data => {
      this.characters = data.results;
      this.charactersCount = data.count;
    });
  }

  pageData(event: any) {
    this.subscription = this.charactersService.getCharactersList(event.pageIndex + 1).subscribe(data => {
      this.characters = data.results;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
