import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AngularFeaturesComponent } from './angular-features/angular-features.component';
import { NgfeaturesService } from './ngfeatures.service';

@NgModule({
  declarations: [
    AppComponent,
    AngularFeaturesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [NgfeaturesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
