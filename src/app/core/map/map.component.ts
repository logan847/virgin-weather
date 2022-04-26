import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { MapService } from 'src/app/services/map.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  public map: mapboxgl.Map | undefined;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 51.5072;
  lng = 0.1276;
  
  constructor(private mapService: MapService) { 
  }

  ngOnInit(): void {
      this.map = new mapboxgl.Map({
        accessToken: environment.mapbox.accessToken,
        container: 'map', 
        style: this.style,
        zoom: 5,
        center: [this.lng, this.lat]
    });
    this.mapService.setMaker(this.map, 51.5072, 0.1276,  'London')
    this.mapService.setMaker(this.map, 48.8566, 2.3522,  'Paris ')
    this.mapService.setMaker(this.map, 40.6966, -73.9491, 'New york')
    this.mapService.setMaker(this.map, 35.6762, 139.6503, 'Tokyo' )
    this.mapService.setMaker(this.map, 34.0543, -118.2439, 'Los angeles')
  }
 
}
