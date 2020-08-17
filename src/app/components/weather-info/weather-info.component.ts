import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../reducers/';

@Component({
  selector: 'foo-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss'],
})
export class WeatherInfoComponent implements OnInit {
  data: any;

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit(): void {
    this.store.select('weather').subscribe((data) => {
      if (data) {
        this.data = data.consolidated_weather[0];
      }
    });
  }
}
