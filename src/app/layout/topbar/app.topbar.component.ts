import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {LayoutService} from '../service/app.layout.service';

@Component({
  selector: 'app-topbar',
  standalone: false,

  templateUrl: './app.topbar.component.html',
  styleUrl: './app.topbar.component.scss'
})
export class AppTopBarComponent implements OnInit {
  items!: MenuItem[];

  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;
  tieredItems: MenuItem[] = [];

  constructor(public layoutService: LayoutService) { }

  ngOnInit(): void {
    this.tieredItems = [
      {
        items: [
          {
            label: 'Log Out',
            icon: 'pi pi-fw pi-sign-out'
          },
        ]
      },
    ];

  }
}
