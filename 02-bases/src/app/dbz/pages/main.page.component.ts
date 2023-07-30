import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main.page.component.html',
})
export class MainPageComponent {
  public characters: Character[] = [
    { name: 'Krillin', power: 1000 },
    { name: 'Goku', power: 9500 },
    { name: 'Vegeta', power: 7500 },
  ];
  onNewCharacter(character: Character): void {
    // console.log('MainPage');
    // console.log(character);
    this.characters.push(character);
  }
  onDeleteCharacter(character: Character): void {
    const index = this.characters.indexOf(character);
    if (index > -1) {
      this.characters.splice(index, 1);
    }
  }
}
