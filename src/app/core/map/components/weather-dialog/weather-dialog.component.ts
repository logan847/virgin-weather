import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-weather-dialog',
  templateUrl: './weather-dialog.component.html',
  styleUrls: ['./weather-dialog.component.scss']
})
export class WeatherDialogComponent implements OnInit {
  public wetherData$?: Observable<any>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {lat: number, lon: number}, private apiService: ApiService) { }

  ngOnInit(): void {
    this.wetherData$ = this.apiService.getWeather(this.data.lat.toString(), this.data.lon.toString())
  }

}
