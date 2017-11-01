import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearingByClickingComponent } from './clearing-by-clicking.component';

describe('ClearingByClickingComponent', () => {
  let component: ClearingByClickingComponent;
  let fixture: ComponentFixture<ClearingByClickingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClearingByClickingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearingByClickingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
