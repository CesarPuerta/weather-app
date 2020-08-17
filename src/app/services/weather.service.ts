import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather(city: number): Observable<any> {
    return this.http
      .get(`https://www.metaweather.com/api/location/${city}`)
      .pipe(
        tap((data: Response) => {
          return data;
        })
      );
  }
}
