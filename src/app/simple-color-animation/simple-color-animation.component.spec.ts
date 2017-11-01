import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleColorAnimationComponent } from './simple-color-animation.component';

describe('SimpleColorAnimationComponent', () => {
  let component: SimpleColorAnimationComponent;
  let fixture: ComponentFixture<SimpleColorAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleColorAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleColorAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
