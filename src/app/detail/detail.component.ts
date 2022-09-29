import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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

  constructor(private route: ActivatedRoute,
            private httpClient: HttpClient) {
    this.url = 'https://airbnb-learning-api.herokuapp.com/listings/';
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

}
