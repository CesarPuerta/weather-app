import {
  ActionReducerMap,
  createFeatureSelector,
  MetaReducer,
  ActionReducer,
} from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import {
  reducer as weatherReducer,
  State as WeatherState,
} from './weather.reducer';
import { environment } from '../../environments/environment';

export interface State {
  router: RouterReducerState;
  weather: WeatherState;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer,
  weather: weatherReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

export const getRouterState = createFeatureSelector<State, RouterReducerState>(
  'router'
);

export const selectWeather = (state: any) => state.weather;
