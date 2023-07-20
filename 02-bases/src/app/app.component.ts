import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title: string = '02-bases';
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
}
