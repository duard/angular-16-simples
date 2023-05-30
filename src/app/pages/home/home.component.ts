import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  count = signal(0);
  doubleCount = computed(() => this.count() * 2);

  constructor() {}

  fakeArray(length: number): any {
    if (length >= 0) {
      console.log(`getou ${length}`);
      return new Array(length);
    } else {
      console.log(`nada`);
    }
  }
}
