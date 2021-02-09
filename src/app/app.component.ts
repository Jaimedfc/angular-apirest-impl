import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from './model/location';

@Component({
  selector: 'capgemini-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  locations :Location[] = [];
  constructor(private httpClient: HttpClient, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
      this.httpClient.get("https://rickandmortyapi.com/api/location/3,21").subscribe((data: Array<any>) => {
        data.forEach((item) => {
          this.locations.push({"id": item.id, "name":item.name, "type":item.type, "dimension": item.dimension,
            "residents": item.residents})
        });
    });
  }

  goTo(locationId :number){
    const myLocation = this.locations.filter((item) => item.id === locationId)[0];
    this.router.navigate([`/locations/${locationId}`], {state:{location: myLocation}});
  }
  
}
