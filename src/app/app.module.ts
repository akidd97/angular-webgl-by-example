import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DetectWebGlComponent } from './detect-web-gl/detect-web-gl.component';
import { ClearingWithColorsComponent } from './clearing-with-colors/clearing-with-colors.component';
import { ClearingByClickingComponent } from './clearing-by-clicking/clearing-by-clicking.component';

@NgModule({
  declarations: [
    AppComponent,
    DetectWebGlComponent,
    ClearingWithColorsComponent,
    ClearingByClickingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
