import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Output()
  public onDelete: EventEmitter<Character> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{ name: 'Trunks', power: 10 }];

  // onDelete

  onDeleteCharacter(index: number): void {
    // Emitir el ID del personaje
    const deletedCharacter = this.characterList[index];

    this.onDelete.emit(deletedCharacter);

    // console.log(index);
  }
}
