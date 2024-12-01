import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {FormsModule} from '@angular/forms';
// import {ChartModule} from 'primeng/chart';
import {MenuModule} from 'primeng/menu';
import {TableModule} from 'primeng/table';
import {StyleClassModule} from 'primeng/styleclass';
import {PanelMenuModule} from 'primeng/panelmenu';
import {ButtonModule} from 'primeng/button';
import {ChartModule} from 'primeng/chart';
import {HighchartsChartModule} from "highcharts-angular";



@NgModule({
  declarations: [
    OverviewComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        // ChartModule,
        MenuModule,
        TableModule,
        StyleClassModule,
        PanelMenuModule,
        ButtonModule,
        DashboardRoutingModule,
        ChartModule,
        HighchartsChartModule
    ]
})
export class DashboardModule { }
