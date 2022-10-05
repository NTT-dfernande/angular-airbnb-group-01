import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailScoresComponent } from './detail-scores.component';

describe('DetailScoresComponent', () => {
  let component: DetailScoresComponent;
  let fixture: ComponentFixture<DetailScoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailScoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
