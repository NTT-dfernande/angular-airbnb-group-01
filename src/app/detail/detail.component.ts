import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DetailResult } from '../model/detail-model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {


  public detail!: DetailResult;
  public url: string;
  public urlSearch: string;
  public viajerosList: string[];
  public reservar: FormGroup;

  constructor(private route: ActivatedRoute,
            private httpClient: HttpClient,
            private fb: FormBuilder) {
    this.url = 'https://airbnb-learning-api.herokuapp.com/listings/';
    this.urlSearch = 'https://airbnb-learning-api.herokuapp.com/search';
    this.viajerosList = ['1 viajero', '2 viajeros', '3 viajeros', '4 viajeros', '5 viajeros'];
    this.reservar = this.fb.group({
      'salida': [],
      'llegada': [],
      'viajeros':['']
    });
  }

  ngOnInit(): void {
    this.getDetailById();
  }


  getDetailById(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.httpClient.get<DetailResult>(this.url + id).subscribe((result: DetailResult) => {
        this.detail = result;
      });
    }
  }

  getTotalPrice(): number{
    return (+this.detail.price.$numberDecimal * 5) +
        (+this.detail.cleaning_fee?.$numberDecimal || 0) +
        (+this.detail.security_deposit?.$numberDecimal || 0) +
        (+this.detail.extra_people?.$numberDecimal || 0) +
        (+this.detail.guests_included?.$numberDecimal || 0);
  }

}
