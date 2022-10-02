import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public country!: string;
  public url: string;
  public cities: any;

  constructor(
    private httpClient: HttpClient) {
      //this.url = 'http://www.mapquestapi.com/geocoding/v1/address?key=sXsmpMrxPy9p4skONF8kqkELEzxq2tvO&location='+this.country;
      this.url = 'https://countriesnow.space/api/v0.1/countries'
    }

  ngOnInit(): void {
    this.httpClient.get<any>(this.url).subscribe((result: any) => {
      this.cities = result.data;
    });
  }

  countryChanged(arg: any): void {
    this.country = arg;
  }

  isCountry(arg: any): any {
    for (let i=0; i < this.cities.length; i++){
      return this.cities[i].cities.find((element: string) => element === this.country);
    }
    return '';
  }

  searchClick(): void {
    this.httpClient.get<any>(this.url).subscribe((result: any) => {
      this.isCountry(result);
      //localStorage.setItem('searchResponse',result.results[0].locations[0].latLng);
    });
    console.log(this.country);
  }

}
