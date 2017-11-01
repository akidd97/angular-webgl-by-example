import { Component, OnInit, ViewChild } from '@angular/core';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-simple-color-animation',
  templateUrl: './simple-color-animation.component.html',
  styleUrls: ['./simple-color-animation.component.css']
})
export class SimpleColorAnimationComponent implements OnInit {
  @ViewChild('glCanvas') glCanvas: any;
  gl: WebGLRenderingContext;
  animationRunning: boolean;
  animationInterval = Observable.interval(1000);
  animation: any;

  constructor() { }

  ngOnInit() {
    this.gl = this.glCanvas.nativeElement.getContext('webgl')
      || this.glCanvas.nativeElement.getContext('experimental-webgl');

      this.drawAnimation();
  }

  drawAnimation() {
    const gl = this.gl;

    if (gl) {
      gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    }

    const color: number[] = this.getRandomColor();
    gl.clearColor(color[0], color[1], color[2], 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
  }

  toggleAnimation() {
    if (this.animationRunning) {
      this.stopAnimation();
      this.animationRunning = false;
    } else {
      this.startAnimation();
      this.animationRunning = true;
    }
  }

  startAnimation() {
    this.animation = this.animationInterval.subscribe(at => {
      this.drawAnimation();
    });
  }

  stopAnimation() {
    this.animation.unsubscribe();
  }

  getRandomColor(): number[] {
    return [Math.random(), Math.random(), Math.random()]
  }
}
