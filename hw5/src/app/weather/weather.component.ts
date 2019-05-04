import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {
  weather: any = [] ;
  Info ;


  value: any ;


  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.value = localStorage.getItem('Info') ;
    this.Info = JSON.parse(this.value) ;

    this.weatherService.getWeather(this.Info.city).subscribe(weather => {
      this.weather = weather ;
    }) ;
  }

}
