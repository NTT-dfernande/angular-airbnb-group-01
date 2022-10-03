import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DetailResult } from '../model/detail-model';

@Injectable({
  providedIn: 'root'
})
export class AirbnbService {


  public detail!: DetailResult;
  public url: string;


  constructor(private httpClient: HttpClient) {
    this.url = 'https://airbnb-learning-api.herokuapp.com/listings/';
  }


  getDetailAirbnbById(): any{
    this.httpClient.get<DetailResult>(this.url).subscribe((result: DetailResult) => {
      this.detail = result;
    });
  }
}
