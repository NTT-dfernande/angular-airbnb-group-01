import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SearchService} from 'src/app/services/search-service'
import { SearchServiceRequest } from '../model/detail-model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public searchResponse:any = {}
  public page:number = 1;
  public pageSize:number = 10;
  public position:SearchServiceRequest = {position:{lat:0,lng:0}}
  public config:any;
  constructor(private SearchService:SearchService, private router:Router) { }

  ngOnInit(): void {
    this.position = {
      position:{
        lat:41.3879,
        lng:2.16992
      }
    };

    this.searchResponse = localStorage.getItem('searchResponse');
    console.log(this.searchResponse)
    this.SearchService.getApartments(this.position).subscribe(
      data => {
        this.searchResponse = data
      }
    )
    this.config = {
      itemsPerPage: 20,
      currentPage: 1,
    };
  }

  cardClick = (indexSearch:number) => {
    this.router.navigate(['/list/'+this.searchResponse[indexSearch]._id]);
  }

  onTableDataChange = (event:any) => {
    this.config.currentPage = event;
  }

}
