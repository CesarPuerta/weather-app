import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from './reducers/';

@Component({
  selector: 'foo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'weather-forecast';
  city: string;
  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit(): void {
    this.store.select('weather').subscribe((data) => {
      if (data) {
        this.city = data.title;
      }
    });
  }
}
