import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
// import {MatDialog} from '@angular/material/dialog';
import { WeatherDialogComponent } from '../core/map/components/weather-dialog/weather-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  public map: mapboxgl.Map | undefined;
  constructor() { }

  // openDialog() {
  //   const dialogRef = this.dialog.open(WeatherDialogComponent);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

  getwetherdata(data:string){
    console.log(data)
  }

  setMaker(mapObj:mapboxgl.Map, lat: number, long:number, name: string){
    const el = document.createElement('div');
    el.className = 'marker';
    el.style.background ='red'
    el.style.width = `25px`;
    el.style.height = `25px`;
    el.style.borderRadius = `25px`;
    el.addEventListener('click', () => {
      this.getwetherdata('cat ' + long + ',' + lat)
      });
    new mapboxgl.Marker(el)
    .setLngLat([lat, long])
      .addTo(mapObj);
   }
}
