import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PaginationInstance } from 'ngx-pagination';
import { SearchService } from 'src/app/services/search-service'
import { SearchServiceRequest } from '../model/detail-model';
import { SearchResult } from '../model/search-model';
import { SearchComponent } from '../search/search.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  @ViewChild(SearchComponent, {static: false}) child1: SearchComponent | undefined;

  public searchPosition: SearchResult[] = []
  public page: number = 1;
  public pageSize: number = 10;
  public position: SearchServiceRequest = { position: { lat: 0, lng: 0 } }
  public config: PaginationInstance;
  public searchResponse:number[] = [];
  public splitResponse:string[] = [];
  public loading:boolean = false;

  constructor(private SearchService: SearchService, private router: Router) {
    this.config = {
      itemsPerPage: 20,
      currentPage: 1,
    };
  }


  searchApartments = () => {
    this.position.position.lng = this.searchResponse[0];
    this.position.position.lat = this.searchResponse[1];

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

  getDataFromSearchBox = ($event: any) =>{
    this.loading = true;
    this.searchResponse = $event;
    this.searchApartments();
    setTimeout(() =>{
      this.loading = false;
    }, 1500);
  }

}
