import {
  WeatherActions,
  WeatherActionsTypes,
} from '../actions/weather.actions';

export type State = any;

const initialState = null;

export function reducer(
  state: State = initialState,
  action: WeatherActions
): any {
  switch (action.type) {
    case WeatherActionsTypes.GET_WEATHER:
      return state;

    case WeatherActionsTypes.GET_WEATHER_SUCCESS:
      return {
        ...action.payload,
      };

    default:
      return state;
  }
}
