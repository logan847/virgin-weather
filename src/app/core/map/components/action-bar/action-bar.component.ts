import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {latValidator, lonValidator } from 'src/app/directives/valid-lat-lon.directive';
import { MapService } from 'src/app/services/map.service';
@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnInit {
  public AbstractControl
   geoForm = new FormGroup({
    latFormControl: new FormControl('', [Validators.required, latValidator]),
    lonFormControl: new FormControl('', [Validators.required, lonValidator]),
  });

  //@Output() MarkerLatLonEvent = new EventEmitter<string>();

  constructor(private mapService: MapService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    //this.MarkerLatLonEvent.emit(this.geoForm.value) another way to feed the data up
    console.warn(this.geoForm.value.latFormControl);    
    this.mapService.setMaker(this.mapService.map!, this.geoForm.value.latFormControl,  this.geoForm.value.lonFormControl, 'test')
  }

}
