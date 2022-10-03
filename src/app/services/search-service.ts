import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchServiceRequest } from '../model/detail-model';
import { SearchResult } from '../model/search-model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {
    
  }

  getApartments = (position:SearchServiceRequest) =>{
    return this.http.post<SearchResult[]>('https://airbnb-learning-api.herokuapp.com/search', position)
  }

  getGeolocation = (url:string) =>{
    return this.http.get<number[]>(url)
  }
}
