import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { Character } from 'src/app/util/interface/character.interface';
import { CharactersService } from 'src/app/util/services/characters.service';

@Component({
  selector: 'app-characters-table',
  templateUrl: './characters-table.html',
  styleUrls: ['./characters-table.component.scss']
})
export class CharactersListTableComponent {

  @Input() characters: Character[];
  tableColumns = ['name', 'eye_color','birth_year'];

  constructor(public charactersService: CharactersService,
              private router: Router) {
  }

  showDetails(character: Character) {
    this.charactersService.selectedCharacter = character;
    this.router.navigate(['/characters', character.id]);
  }

}
