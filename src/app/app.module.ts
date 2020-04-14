import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResponsiveScreenComponent } from './responsive-screen/responsive-screen.component';
import {DeviceDetectorService} from 'ngx-device-detector';

@NgModule({
  declarations: [
    AppComponent,
    ResponsiveScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    DeviceDetectorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
