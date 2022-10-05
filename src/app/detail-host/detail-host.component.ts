import { Component, Input } from '@angular/core';
import { createDefaultDetail, DetailResult } from '../model/detail-model';

@Component({
  selector: 'app-detail-host',
  templateUrl: './detail-host.component.html',
  styleUrls: ['./detail-host.component.css']
})
export class DetailHostComponent {

  @Input() detail: DetailResult;

  constructor() {
    this.detail = createDefaultDetail();
  }

}
