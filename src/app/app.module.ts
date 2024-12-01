import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {NotfoundComponent} from './feature/notfound/notfound.component';
import {AppLayoutModule} from './layout/app.layout.module';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {HighchartsChartModule} from 'highcharts-angular';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    AppLayoutModule,
    HighchartsChartModule
  ],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy },],
  bootstrap: [AppComponent]
})
export class AppModule { }
