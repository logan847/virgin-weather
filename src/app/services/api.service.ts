import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getWeather(lat: string, lon:string){
    this.http.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=4d802a6e70ed5329effee8a0bc5a00e7&units=metric`).subscribe(data => {
      console.log(data)
    })
  }

  public getWeathercurrent(lat: string, lon:string): any{
     return this.http.get<any>(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4d802a6e70ed5329effee8a0bc5a00e7&units=metric`)}
}
