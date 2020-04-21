import { Component, OnInit } from '@angular/core';

import { HttpClient } from "@angular/common/http"

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private http: HttpClient) { }
 
  weather = {};

  ngOnInit(): void {

    this.http.get("http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=fbf712a5a83d7305c3cda4ca8fe7ef29")
    .subscribe((response) => {
      console.log(response);
      this.weather = response;
    })

  }

}
