import {ChangeDetectorRef, Component, HostBinding, Input, OnDestroy, OnInit} from '@angular/core';
import {filter, Subscription} from 'rxjs';
import {NavigationEnd, Router} from '@angular/router';
import {LayoutService} from '../service/app.layout.service';
import {MenuService} from './app.menu.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './app.menu.component.html',
  styleUrl: './app.menu.component.scss'
})
export class AppMenuComponent  implements OnInit {

  model: any[] = [];

  constructor(public layoutService: LayoutService) { }

  ngOnInit() {
    this.model = [
      {
        label: 'Dashboard',
        items: [
          { label: 'Overview', icon: 'pi pi-fw pi-info-circle', routerLink: ['/'] }
        ]
      },
      {
        label: 'Pages',
        icon: 'pi pi-fw pi-briefcase',
        items: [
          {
            label: 'System',
            icon: 'pi pi-fw pi-cog',
            items: [
              {
                label: 'Administrators',
                icon: 'pi pi-fw pi-sign-in',
                routerLink: ['/auth/login']
              },
              {
                label: 'Date and Time',
                icon: 'pi pi-fw pi-times-circle',
                routerLink: ['/auth/error']
              },
              {
                label: 'DNS settings',
                icon: 'pi pi-fw pi-lock',
                routerLink: ['/auth/access']
              },
              {
                label: 'Default Route',
                icon: 'pi pi-fw pi-lock',
                routerLink: ['/auth/access']
              }
            ]
          },
          {
            label: 'Protection Settings',
            icon: 'pi pi-fw pi-ban',
            items: [
              {
                label: 'Addresses',
                icon: 'pi pi-fw pi-sign-in',
                routerLink: ['/auth/login']
              },
              {
                label: 'Protection Policies',
                icon: 'pi pi-fw pi-times-circle',
                routerLink: ['/auth/error']
              },
            ]
          },
          {
            label: 'Profiles Settings',
            icon: 'pi pi-fw pi-ban',
            items: [
              {
                label: 'Ip Profile',
                icon: 'pi pi-fw pi-sign-in',
                routerLink: ['/profile-settings/ip-profile']
              },
              {
                label: 'ICMP Profile',
                icon: 'pi pi-fw pi-times-circle',
                routerLink: ['/profile-settings/icmp-profile']
              },
              {
                label: 'NTP Profile',
                icon: 'pi pi-fw pi-lock',
                routerLink: ['/profile-settings/ntp-profile']
              },
              {
                label: 'TCP Profile',
                icon: 'pi pi-fw pi-lock',
                routerLink: ['/profile-settings/tcp-profile']
              },
              {
                label: 'DNS Profile',
                icon: 'pi pi-fw pi-lock',
                routerLink: ['/profile-settings/dns-profile']
              }

            ]
          },
        ]
      },
    ];
  }
}
