import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-clearing-by-clicking',
  templateUrl: './clearing-by-clicking.component.html',
  styleUrls: ['./clearing-by-clicking.component.css']
})
export class ClearingByClickingComponent implements OnInit {
  @ViewChild('glCanvas') glCanvas: any;
  gl: WebGLRenderingContext;

  constructor() { }

  ngOnInit() {
    this.gl = this.glCanvas.nativeElement.getContext('webgl')
              || this.glCanvas.nativeElement.getContext('experimental-webgl');
  }

  switchColor() {
    const gl = this.gl;

    if (gl) {
      gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    }

    const color: number[] = this.getRandomColor();
    gl.clearColor(color[0], color[1], color[2], 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
  }

  getRandomColor(): number[] {
    return [Math.random(), Math.random(), Math.random()];
  }
}
