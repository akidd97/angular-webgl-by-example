import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectWebGlComponent } from './detect-web-gl.component';

describe('DetectWebGlComponent', () => {
  let component: DetectWebGlComponent;
  let fixture: ComponentFixture<DetectWebGlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetectWebGlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectWebGlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
