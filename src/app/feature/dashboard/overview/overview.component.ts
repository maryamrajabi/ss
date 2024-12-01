import {Component, OnDestroy, OnInit} from '@angular/core';
import {OverviewService} from '../service/overview.service';
import {OverviewModel} from '../model/overview';
import {MenuItem} from 'primeng/api';
import {debounceTime, noop, Subscription} from 'rxjs';
import {LayoutService} from '../../../layout/service/app.layout.service';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-overview',
  standalone: false,

  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent implements OnInit, OnDestroy {
  items!: MenuItem[];
  // products!: Product[];
  Highcharts: typeof Highcharts = Highcharts; // required
  highchartsOptions: Highcharts.Options = {
    title: {
      text: ''
    },
    colors: ['#afcd73'],

    xAxis: {
      crosshair: true,
      labels: {
        style: {
          fontSize: '14px'
        }
      },
      type: 'category'
    },
    yAxis: {
      min: 0,
      title: {
        text: '%'
      }
    },
    tooltip: {
      valueSuffix: ' %'
    },
    series: [{
      data: [
        ['CPU', 13],
        ['Log Disk', 1.4],
        ['RAM', 10]],
      type: 'column',
      showInLegend: false,
      colorByPoint: true,

    }]
  };
  chartConstructor: string = 'chart'; // optional string, defaults to 'chart'
  chartCallback: Highcharts.ChartCallbackFunction = function (chart) {  } // optional function, defaults to null
  updateFlag: boolean = false; // optional boolean
  oneToOneFlag: boolean = true; // optional boolean, defaults to false
  runOutsideAngular: boolean = false; // optional boolean, defaults to false

  chartData: any;


  chartOptions: any;

  subscription!: Subscription;
  products!: OverviewModel[];
  administratorsLogins!: OverviewModel[];
  policiesStatus!: OverviewModel[];
  attackLogs!: OverviewModel[];
  overviewSystemInformations!: OverviewModel[];

  constructor(private overviewService: OverviewService,
              public layoutService: LayoutService) {
    this.subscription = this.layoutService.configUpdate$
      .pipe(debounceTime(25))
      .subscribe((config) => {
        this.initChart();
      });
  }

  ngOnInit() {



    this.overviewService.getSystemInformationsMini().then((data: any) => {
      this.overviewSystemInformations = data;
    });
    this.initChart();
    this.overviewService.getAdministratorsLogins().then(data => this.administratorsLogins = data);
    this.overviewService.getPoliciesStatus().then(data => this.policiesStatus = data);
    this.overviewService.getAttackLogs().then(data => this.attackLogs = data);
    this.overviewService.getProductsSmall().then(data => this.products = data);

    this.items = [
      { label: 'Add New', icon: 'pi pi-fw pi-plus' },
      { label: 'Remove', icon: 'pi pi-fw pi-minus' }
    ];
  }

  initChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.chartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          backgroundColor: documentStyle.getPropertyValue('--bluegray-700'),
          borderColor: documentStyle.getPropertyValue('--bluegray-700'),
          tension: .4
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          backgroundColor: documentStyle.getPropertyValue('--green-600'),
          borderColor: documentStyle.getPropertyValue('--green-600'),
          tension: .4
        }
      ]
    };

    this.chartOptions = {
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  protected readonly noop = noop;
}
