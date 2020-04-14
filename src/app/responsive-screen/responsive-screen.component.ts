import { Component, OnInit } from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-responsive-screen',
  templateUrl: './responsive-screen.component.html',
  styleUrls: ['./responsive-screen.component.css']
})
export class ResponsiveScreenComponent implements OnInit {

  isMobileDevice = false;
  isTabletDevice = false;
  isDesktopDevice = false;
  isMobile = false;
  isTablet = false;
  isDesktop = false;
  width: number = window.innerWidth;
  mobileWidth = 760;
  tabletWidth = 0;
  desktopWidth = 0;

  ngOnInit(): void {
    this.isMobile = this.width < this.mobileWidth;
  }


  onResize(event) {
    this.width = event.target.innerWidth;
    this.isMobile = this.width < this.mobileWidth;
    this.isTablet = (this.mobileWidth < this.width) && (this.width <= this.tabletWidth);
    this.isDesktop = (this.tabletWidth <= this.width) && (this.mobileWidth < this.width);
  }

  constructor( private deviceService: DeviceDetectorService) {
    this.deviceDetect();
  }


  deviceDetect() {
    this.isMobileDevice = this.deviceService.isMobile();
    this.isTabletDevice = this.deviceService.isTablet();
    this.isDesktopDevice = this.deviceService.isDesktop();
    if (this.isDesktopDevice) {
      this.desktopWidth = window.innerWidth;
      this.isDesktop = true;
      this.isMobile = false;
      this.isTablet = false;
    } else if (this.isTabletDevice) {
      this.tabletWidth = window.innerWidth;
      this.isTablet = true;
      this.isDesktop = false;
      this.isMobile = false;
    } else if (this.isMobileDevice) {
      this.mobileWidth = window.innerWidth;
      this.isMobile = true;
      this.isDesktop = false;
      this.isTablet = false;
    }
  }

}
