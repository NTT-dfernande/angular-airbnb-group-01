import { TestBed } from '@angular/core/testing';

import { AirbnbService } from './airbnb-detail.service';

describe('AirbnbService', () => {
  let service: AirbnbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirbnbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
