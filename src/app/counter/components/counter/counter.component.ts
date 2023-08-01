import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h3>contador: {{ counter }}</h3>
    <button (click)="decreaseBy(1)">-1</button>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="counterReset(16)">Reset</button>`,
})
export class CounterComponent {
  public counter: number = 16;
  increaseBy(value: number): void {
    this.counter += value;
  }
  decreaseBy(value: number): void {
    this.counter -= value;
  }
  counterReset(value: number): void {
    this.counter = value;
  }
  constructor() {}
}
