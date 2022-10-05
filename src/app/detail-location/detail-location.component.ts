import { Component, Input } from '@angular/core';
import { createDefaultDetail, DetailResult } from '../model/detail-model';

@Component({
  selector: 'app-detail-location',
  templateUrl: './detail-location.component.html',
  styleUrls: ['./detail-location.component.css']
})
export class DetailLocationComponent {

  @Input() detail: DetailResult;

  constructor() {
    this.detail = createDefaultDetail();
  }

}
