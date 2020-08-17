import { Action } from '@ngrx/store';

export enum WeatherActionsTypes {
  GET_WEATHER = '[Weather] Get Weather',
  GET_WEATHER_SUCCESS = '[Weather] Get Weather Success',
}

export class GetWeather implements Action {
  readonly type = WeatherActionsTypes.GET_WEATHER;
  constructor(public payload: any) {}
}

export class GetWeatherSuccess implements Action {
  readonly type = WeatherActionsTypes.GET_WEATHER_SUCCESS;
  constructor(public payload: any) {}
}

export type WeatherActions = GetWeather | GetWeatherSuccess;
