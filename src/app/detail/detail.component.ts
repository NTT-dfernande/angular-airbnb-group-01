import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { createDefaultDetail, DetailResult, Review } from '../model/detail-model';
import * as L from 'leaflet';
import { AirbnbService } from '../services/airbnb-detail.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, AfterViewInit {


  public detail: DetailResult = createDefaultDetail();
  public viajerosList: string[];
  public reservar: FormGroup;
  public map: any;
  public reviewsList: Review[];
  public buttonReviews: string;
  public days: number;
  public seeMore:boolean = true;
  public seeLess:boolean = false;

  constructor(private routeActivate: ActivatedRoute,
          private route: Router,
            private airBnbService: AirbnbService,
            private fb: FormBuilder,
            public datepipe: DatePipe) {
    this.viajerosList = ['1 viajero', '2 viajeros', '3 viajeros', '4 viajeros', '5 viajeros'];
    this.reservar = this.fb.group({
      'salida': [],
      'llegada': [],
      'viajeros':['']
    });
    this.reviewsList = [];
    this.buttonReviews = '';
    this.days = 1;
  }

  ngOnInit(): void {
    this.getDetailById();
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  getDetailById(): void {
    const id = this.routeActivate.snapshot.paramMap.get('id');
    if(id){
      this.airBnbService.getDetailAirbnbById(id).subscribe((result: DetailResult) => {
        this.detail = result;
        this.getReviewsList();
        this.buttonReviews = 'Mostrar las ' + this.detail.reviews.length + ' evaluaciones';
        this.initializeDetailMap();
      });
    }else{
      this.route.navigate(['/home']);
    }
  }

  getTotalPrice(): number{
    return (+this.detail.price.$numberDecimal * this.days) +
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
    this.buttonReviews = 'Mostrar menos evaluaciones';
    this.seeLess = true;
    this.seeMore = false;
  }

  seeLessReviews(): void{
    this.reviewsList = [];
    this.getReviewsList();
    this.buttonReviews = 'Mostrar las ' + this.detail.reviews.length + ' evaluaciones';
    this.seeLess = false;
    this.seeMore = true;
  }

  getDates(){
    const llegada = this.reservar.controls['llegada'].value;
    const salida = this.reservar.controls['salida'].value;
    if(llegada && salida){
      let time = new Date(salida).getTime() - new Date(llegada).getTime();
      if(time > 0){
        this.days = time / (1000 * 3600 * 24);
      }

    }
  }

  private initializeDetailMap() {
    this.map.setView(new L.LatLng(this.detail.address.location.coordinates[1] ?? 0, this.detail.address.location.coordinates[0] ?? 0), 15);
    const zooMarkerPopup = L.popup().setContent("Hello there!");
    let myIcon = L.icon({ iconUrl: '../../assets/airbnb-logo.png', iconSize: [50, 50] });
    L.marker(new L.LatLng(this.detail.address.location.coordinates[1] ?? 0, this.detail.address.location.coordinates[0] ?? 0), { icon: myIcon }).bindPopup(zooMarkerPopup).addTo(this.map);
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [ this.detail.address.location.coordinates[1], this.detail.address.location.coordinates[0]],
      zoom: 5
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: 'Curso Angular'
    });

    tiles.addTo(this.map);
  }

  private getReviewsList() {
    if (this.detail.reviews.length > 10) {
      let i = 0;
      while (i < 10) {
        this.reviewsList.push(this.detail.reviews[i]);
        i++;
      }
    } else {
      this.reviewsList = this.detail.reviews;
    }
  }

}
