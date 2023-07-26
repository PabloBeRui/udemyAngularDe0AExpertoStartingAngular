import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './addCharacter.component.html',
  styleUrls: ['./addCharacter.component.css'],
})
export class AddCharacterComponent {
  public character: Character = {
    name: '',
    power: 0,
  };
  emitCharacter():void {
    console.log(this.character);

  }
}
