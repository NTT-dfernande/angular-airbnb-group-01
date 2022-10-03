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
export class DetailComponent implements OnInit, AfterViewInit {


  public detail: DetailResult = this.getDetailByDefect();
  public url: string;
  public viajerosList: string[];
  public reservar: FormGroup;
  public map: any;
  public reviewsList: Review[];
  public buttonReviews: string;

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
    this.buttonReviews = '';
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
      this.httpClient.get<DetailResult>(this.url + id).subscribe((result: DetailResult) => {
        this.detail = result;
        this.buttonReviews = 'Mostrar las ' + this.detail.reviews.length + ' evaluaciones';
        if(this.detail.reviews.length > 10){
          let i = 0;
          while(i < 10){
            this.reviewsList.push(this.detail.reviews[i]);
            i++;
          }
        }else{
          this.reviewsList = this.detail.reviews;
        }
        this.map.setView(new L.LatLng(this.detail.address.location.coordinates[1] ?? 0, this.detail.address.location.coordinates[0] ?? 0), 15);
        const zooMarkerPopup = L.popup().setContent("Hello there!");
        var myIcon = L.icon({iconUrl: '../../assets/airbnb-logo.png', iconSize: [50, 50]})
        L.marker(new L.LatLng(this.detail.address.location.coordinates[1] ?? 0, this.detail.address.location.coordinates[0] ?? 0), { icon: myIcon }).bindPopup(zooMarkerPopup).addTo(this.map);
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

  getDetailByDefect(): DetailResult{
    return {
      _id: '0',
      access: '',
      accommodates: 0,
      address: {
        country: '',
        country_code: '',
        government_area: '',
        location: {
          coordinates: [0, 0],
          is_location_exact: true,
          type: '',
        },
        market: '',
        street: '',
        suburb: ''
      },
      amenities: [],
      availability: {
        availability_30: 0,
        availability_365: 0,
        availability_60: 0,
        availability_90: 0
      },
      bathrooms: {
        $numberDecimal: ''
      },
      bed_type: '',
      bedrooms: 0,
      beds: 0,
      calendar_last_scraped: new Date(),
      cancellation_policy: '',
      cleaning_fee: {
        $numberDecimal: ''
      },
      description: '',
      extra_people: {
        $numberDecimal: ''
      },
      first_review: new Date(),
      guests_included: {
        $numberDecimal: ''
      },
      host: {
        host_about: '',
        host_has_profile_pic: false,
        host_id: '',
        host_identity_verified: false,
        host_is_superhost: false,
        host_listings_count: 0,
        host_location: '',
        host_name: '',
        host_neighbourhood: '',
        host_picture_url: '',
        host_response_rate: 0,
        host_response_time: '',
        host_thumbnail_url: '',
        host_total_listings_count: 0,
        host_url: '',
        host_verifications: []
      },
      house_rules: '',
      images: {
        medium_url: '',
        picture_url: '',
        thumbnail_url: '',
        xl_picture_url: ''
      },
      interaction: '',
      last_review: new Date(),
      last_scraped: new Date(),
      listing_url: '',
      maximum_nights: '',
      minimum_nights: '',
      name: '',
      neighborhood_overview: '',
      notes: '',
      number_of_reviews: 0,
      price: {
        $numberDecimal: ''
      },
      property_type: '',
      review_scores: {
        review_scores_accuracy: 0,
        review_scores_checkin: 0,
        review_scores_cleanliness: 0,
        review_scores_communication: 0,
        review_scores_location: 0,
        review_scores_rating: 0,
        review_scores_value: 0,
      },
      reviews: [],
      room_type: '',
      security_deposit: {
        $numberDecimal: ''
      },
      space: '',
      summary: '',
      transit: ''
    };
  }
}
