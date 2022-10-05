import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailHostComponent } from './detail-host.component';

describe('DetailHostComponent', () => {
  let component: DetailHostComponent;
  let fixture: ComponentFixture<DetailHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailHostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
