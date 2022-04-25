import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import {MatDialog} from '@angular/material/dialog';
import { WeatherDialogComponent } from '../core/map/components/weather-dialog/weather-dialog.component';
import { ApiService } from './api.service';
import {take, tap} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class MapService {
  public map: mapboxgl.Map | undefined;
  constructor(private dialog: MatDialog, private apiService: ApiService) { }

  openDialog() {
    const dialogRef = this.dialog.open(WeatherDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  getwetherdata(lat:number, lon:number){
    this.apiService.getWeather(lat.toString() , lon.toString())
  }


  setMaker(mapObj:mapboxgl.Map, lat: number, lon:number, name: string){
   this.apiService.getWeathercurrent(lat.toString() , lon.toString()).subscribe(x => {
    const el = document.createElement('div');
    el.className = 'marker';
    el.style.background ='red'
    el.style.width = `35px`;
    el.style.height = `35px`;
    el.style.color = `white`;
    el.style.display = `flex`;
    el.style.justifyContent = `center`;
    el.style.alignItems = `center`;
    el.insertAdjacentHTML(
      'afterbegin',
      `<span style="color: lime">${x.main.temp}°</span>`,
    );
    el.style.borderRadius = `25px`;
    el.addEventListener('click', () => {
      this.getwetherdata(lat,lon);
      this.openDialog();
      });
    new mapboxgl.Marker(el)
    .setLngLat([lon,lat])
      .addTo(mapObj);
   },
   error =>{
      console.error('failed to get data for',lon,lat )
   });
   }
}
