import { Component, OnInit } from '@angular/core';
import { location, results } from '@app/shared/interface/location-interface';
import { LocationService } from '@app/shared/services/location.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent implements OnInit {
  locations: results[] = [];
  
  

  constructor(private locationSvc: LocationService) { }

  ngOnInit(): void {
    this.listLocation()
  }
  private listLocation(){
    this.locationSvc.getLocations()
    .subscribe((res:any)=>
    { this.locations=res.results
     
      }
    
    );
   
    
   
    
    
  }

}
