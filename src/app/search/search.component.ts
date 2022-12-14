import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { SearchService} from 'src/app/services/search-service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Output() searchData = new EventEmitter<any>();

  public country!: string;
  public url1: string;
  public url2: string;
  public url: string;
  public cities: any;
  public searchResponse:string ='';

  constructor(
    private httpClient: HttpClient, private SearchService: SearchService) {
      this.url1 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
      this.url2 = '.json?proximity=ip&types=place%2Cpostcode%2Caddress&language=es&access_token=pk.eyJ1Ijoiam9zYW5jYXJoaWQiLCJhIjoiY2w4cnlla2ZlMHVmaTNvcHJtYTlwNjZsNSJ9.rEdxqxEyBd19DtS5_3Avpw';
      this.url = '';
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
      this.searchResponse = result.features[0].geometry.coordinates 
      this.searchData.emit(this.searchResponse);
    });
  }

}
