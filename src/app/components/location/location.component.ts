import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from 'src/app/model/location';

@Component({
  selector: 'capgemini-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  residents: string[] = [];
  location: Location;
  constructor(private httpClient: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.location = history.state.location;
      this.residents = [];
      this.location.residents.forEach((residentURL) => {
        this.httpClient.get(residentURL).subscribe((data :any) => {
          this.residents.push(data.name);
        })
      });
    });
  }

}
