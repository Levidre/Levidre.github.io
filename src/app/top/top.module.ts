import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BannerComponent } from './banner/banner.component';
import { WebringBoxComponent } from './webring-box/webring-box.component';
import { IconComponent } from './icon/icon.component';
import { MainTitleComponent } from './main-title/main-title.component';


@NgModule({
  declarations: [
    BannerComponent,
    IconComponent,
    WebringBoxComponent,
    MainTitleComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    BannerComponent,
    IconComponent,
    WebringBoxComponent
  ],
  providers: []
})
export class TopModule { }
