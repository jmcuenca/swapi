import {Component, OnInit} from '@angular/core';
import { Character } from 'src/app/util/interface/character.interface';
import { CharactersService } from 'src/app/util/services/characters.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
  character: Character;

  constructor(public charactersService: CharactersService) {
  }

  ngOnInit() {
    this.character = this.charactersService.selectedCharacter;
  }

}
