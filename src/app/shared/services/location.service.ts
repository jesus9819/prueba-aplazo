import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { location } from '../interface/location-interface';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor( private http: HttpClient) { }
  getLocations(){
   return this.http.get<location>(`${environment.baseUrlApi}/location`)
  }
}
