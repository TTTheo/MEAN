import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' ;
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = 'c143e155f4e166a40b760ce4c58618ef';
  url = 'http://api.openweathermap.org/data/2.5/weather?q=' ;
  constructor(private http: HttpClient) { }

  getWeather(city) {
    return this.http.get(this.url + city + '&appid=' + this.apiKey).pipe(map((weather) => {
      return weather;
    }));
  }
}
