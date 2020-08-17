import { Injectable } from '@angular/core';

import * as WeatherTypes from '../actions/weather.actions';
import { WeatherService } from '../services/weather.service';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

@Injectable()
export class WeatherEffects {
  @Effect()
  GetWeather$: Observable<Action> = this.actions$.pipe(
    ofType(WeatherTypes.WeatherActionsTypes.GET_WEATHER),
    switchMap((city: any) =>
      this.weatherService.getWeather(city.payload || city)
    ),
    map(
      (weatherResult: any) => new WeatherTypes.GetWeatherSuccess(weatherResult)
    )
  );

  constructor(
    private actions$: Actions,
    private weatherService: WeatherService
  ) {}
}
