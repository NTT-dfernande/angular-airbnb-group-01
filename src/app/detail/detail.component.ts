import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailResult, Review } from '../model/detail-model';
import * as L from 'leaflet';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {


  public detail!: DetailResult;
  public url: string;
  public viajerosList: string[];
  public reservar: FormGroup;
  public map: any;
  public reviewsList: Review[];

  constructor(private routeActivate: ActivatedRoute,
          private route: Router,
            private httpClient: HttpClient,
            private fb: FormBuilder,
            public datepipe: DatePipe) {
    this.url = 'https://airbnb-learning-api.herokuapp.com/listings/';
    this.viajerosList = ['1 viajero', '2 viajeros', '3 viajeros', '4 viajeros', '5 viajeros'];
    this.reservar = this.fb.group({
      'salida': [],
      'llegada': [],
      'viajeros':['']
    });
    this.reviewsList = [];
  }

  ngOnInit(): void {
    this.getDetailById();
  }

  getDetailById(): void {
    const id = this.routeActivate.snapshot.paramMap.get('id');
    if(id){
      this.httpClient.get<DetailResult>(this.url + id).subscribe((result: DetailResult) => {
        this.detail = result;
        if(this.detail.reviews.length > 10){
          let i = 0;
          while(i < 10){
            this.reviewsList.push(this.detail.reviews[i]);
            i++;
          }
        }else{
          this.reviewsList = this.detail.reviews;
        }
        this.initMap();
      });
    }else{
      this.route.navigate(['/home']);
    }
  }

  getTotalPrice(): number{
    return (+this.detail.price.$numberDecimal * 5) +
        (+this.detail.cleaning_fee?.$numberDecimal || 0) +
        (+this.detail.security_deposit?.$numberDecimal || 0) +
        (+this.detail.extra_people?.$numberDecimal || 0) +
        (+this.detail.guests_included?.$numberDecimal || 0);
  }

  getFormattedString(value: string): number{
    return Number(value);
  }

  seeAllReviews(): void{
    this.reviewsList = this.detail.reviews;
  }
  private initMap(): void {
    this.map = L.map('map', {
      center: [ this.detail.address.location.coordinates[0], this.detail.address.location.coordinates[1] ],
      zoom: 3
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }
}
