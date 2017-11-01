import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-clearing-with-colors',
  templateUrl: './clearing-with-colors.component.html',
  styleUrls: ['./clearing-with-colors.component.css']
})
export class ClearingWithColorsComponent implements OnInit {
  @ViewChild('glCanvas') glCanvas: any;

  constructor() { }

  ngOnInit() {
    this.draw();
  }

  draw() {
    const gl: WebGLRenderingContext = this.glCanvas.nativeElement.getContext('webgl')
        || this.glCanvas.nativeElement.getContext('experimental-webgl');

    if (!gl) {
      return;
    }

    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);

    // set the clear color to darkish green.
    gl.clearColor(0.0, 0.5, 0.0, 1.0);
    // Clear the context with the newly set color. This
    // is the function call that actually does the drawing.
    gl.clear(gl.COLOR_BUFFER_BIT);
  }
}
