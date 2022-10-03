import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { SearchService} from 'src/app/services/search-service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public country!: string;
  public url1: string;
  public url2: string;
  public url: string;
  public cities: any;

  constructor(
    private httpClient: HttpClient, private SearchService: SearchService) {
      this.url1 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
      this.url2 = '.json?proximity=ip&types=place%2Cpostcode%2Caddress&language=es&access_token=pk.eyJ1Ijoiam9zYW5jYXJoaWQiLCJhIjoiY2w4cnlla2ZlMHVmaTNvcHJtYTlwNjZsNSJ9.rEdxqxEyBd19DtS5_3Avpw';
      this.url = '';
    }

  ngOnInit(): void {
    
  }

  countryChanged(arg: any): void {
    this.country = arg;
    this.url = this.url1 + arg + this.url2;
    this.httpClient.get<any>(this.url).subscribe((result: any) => {
      this.cities = result.features;
    });
  }

  searchClick(): void {
    this.SearchService.getGeolocation(this.url).subscribe((result: any)=>{
      localStorage.setItem('searchResponse',result.features[0].geometry.coordinates);
    });
  }

}
