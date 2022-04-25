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
    this.mapService.setMaker(this.map, 0.1276, 51.5072, 'London')
    this.mapService.setMaker(this.map, 2.3522, 48.8566, 'Paris ')
    this.mapService.setMaker(this.map, -73.9491, 40.6966, 'New york')
    this.mapService.setMaker(this.map, 139.6503, 35.6762, 'Tokyo' )
    this.mapService.setMaker(this.map, -118.2439,34.0543, 'Los angeles')
  }
 
}
