import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearingWithColorsComponent } from './clearing-with-colors.component';

describe('ClearingWithColorsComponent', () => {
  let component: ClearingWithColorsComponent;
  let fixture: ComponentFixture<ClearingWithColorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClearingWithColorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearingWithColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
