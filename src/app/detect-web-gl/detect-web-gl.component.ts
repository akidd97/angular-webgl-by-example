import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-detect-web-gl',
  templateUrl: './detect-web-gl.component.html',
  styleUrls: ['./detect-web-gl.component.css']
})
export class DetectWebGlComponent implements OnInit {
  @ViewChild('glCanvas') glCanvas: any;
  message: string = 'Here would go the result of WebGL feature detection';

  constructor() { }

  ngOnInit() {
  }

  detectWebGLContext() {
    var gl: WebGLRenderingContext = this.glCanvas.nativeElement.getContext('webgl');

    if (gl && gl instanceof WebGLRenderingContext) {
      this.message = 'Congratulations! Your browser supports WebGL/';
    } else {
      this.message = 'Your browser or device may not support WebGL';
    }
  }

}
