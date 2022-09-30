import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchServiceRequest } from '../model/detail-model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {
    
  }

  getApartments = (position:SearchServiceRequest) =>{
    return this.http.post<any>('https://airbnb-learning-api.herokuapp.com/search', position)
  }
}
