import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DetailResult } from '../model/detail-model';

@Injectable({
  providedIn: 'root'
})
export class AirbnbService {


  public url: string;


  constructor(private httpClient: HttpClient) {
    this.url = 'https://airbnb-learning-api.herokuapp.com/listings/';
  }


  getDetailAirbnbById(id: string): any{
    return this.httpClient.get<DetailResult>(this.url + id);
  }
}
