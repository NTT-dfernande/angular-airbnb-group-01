import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaginationInstance } from 'ngx-pagination';
import { SearchService } from 'src/app/services/search-service'
import { SearchServiceRequest } from '../model/detail-model';
import { SearchResult } from '../model/search-model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public searchPosition: SearchResult[] = []
  public page: number = 1;
  public pageSize: number = 10;
  public position: SearchServiceRequest = { position: { lat: 0, lng: 0 } }
  public config: PaginationInstance;
  public searchResponse:String = '';
  public splitResponse:string[] = [];
  constructor(private SearchService: SearchService, private router: Router) {
    this.config = {
      itemsPerPage: 20,
      currentPage: 1,
    };
    this.position = {
      position: {
        lat: 41.3879,
        lng: 2.16992
      }
    };
  }

  ngOnInit(): void {    
    this.searchResponse = localStorage.getItem('searchResponse') ?? '[]';
    this.splitResponse = this.searchResponse.split(',',2);
    this.position.position.lng = parseFloat(this.splitResponse[0]);
    this.position.position.lat = parseFloat(this.splitResponse[1]);
    
    this.SearchService.getApartments(this.position).subscribe(
      data => {
        this.searchPosition = data
      }
    )

  }

  cardClick = (indexSearch: number) => {
    this.router.navigate(['/list/' + this.searchPosition[indexSearch]._id]);
  }

  onTableDataChange = (event: number) => {
    this.config.currentPage = event;
  }

}
