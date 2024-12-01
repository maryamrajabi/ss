import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {AppLayoutModule} from './layout/app.layout.module';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {HighchartsChartModule} from 'highcharts-angular';
import {ProfileSettingsService} from './feature/profiles-settings/service/profile-settings.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    AppLayoutModule,
    HighchartsChartModule
  ],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy },ProfileSettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
