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

  public searchResponse: SearchResult[] = []
  public page: number = 1;
  public pageSize: number = 10;
  public position: SearchServiceRequest = { position: { lat: 0, lng: 0 } }
  public config: PaginationInstance;
  constructor(private SearchService: SearchService, private router: Router) {
    this.config = {
      itemsPerPage: 20,
      currentPage: 1,
    };

  }

  ngOnInit(): void {
    this.position = {
      position: {
        lat: 41.3879,
        lng: 2.16992
      }
    };

    this.searchResponse = JSON.parse(localStorage.getItem('searchResponse') ?? '[]');
    console.log(this.searchResponse)
    this.SearchService.getApartments(this.position).subscribe(
      data => {
        this.searchResponse = data
      }
    )

  }

  cardClick = (indexSearch: number) => {
    this.router.navigate(['/list/' + this.searchResponse[indexSearch]._id]);
  }

  onTableDataChange = (event: number) => {
    this.config.currentPage = event;
  }

}
