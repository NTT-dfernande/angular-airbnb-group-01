import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public searchResponse:any = {}
  constructor() { }

  ngOnInit(): void {
    this.searchResponse = localStorage.getItem('searchResponse');
    console.log(this.searchResponse)
  }

  cardClick = () => {
    localStorage.setItem('cityId', this.searchResponse.id)
  }

}
