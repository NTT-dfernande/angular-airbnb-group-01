import { Component, Input } from '@angular/core';
import { createDefaultDetail, DetailResult } from '../model/detail-model';

@Component({
  selector: 'app-detail-scores',
  templateUrl: './detail-scores.component.html',
  styleUrls: ['./detail-scores.component.css']
})
export class DetailScoresComponent {

  @Input() detail: DetailResult;

  constructor() {
    this.detail = createDefaultDetail();
  }
}
