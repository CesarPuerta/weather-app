import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../reducers/';
import { GetWeather } from '../../actions/weather.actions';

@Component({
  selector: 'foo-weather-selector',
  templateUrl: './weather-selector.component.html',
  styleUrls: ['./weather-selector.component.scss'],
})
export class WeatherSelectorComponent implements OnInit {
  cities = [
    {
      name: 'Bogotá',
      woeid: 368148,
    },
    {
      name: 'London',
      woeid: 44418,
    },
    {
      name: 'San Francisco',
      woeid: 2487956,
    },
  ];

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit(): void {}

  onSelectionChanged(event: MatSelectChange): void {
    for (const city of this.cities) {
      const woeid = event.value;
      if (city.woeid === woeid) {
        this.store.dispatch(new GetWeather(woeid));
        break;
      }
    }
  }
}
