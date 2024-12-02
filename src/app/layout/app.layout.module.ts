import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFooterComponent } from './footer/app.footer.component';
import { AppSidebarComponent } from './sidebar/app.sidebar.component';
import {AppTopBarComponent} from './topbar/app.topbar.component';
import { AppMenuComponent } from './menu/app.menu.component';
import {AppLayoutComponent} from './app.layout.component';
import { AppMenuItemComponent } from './menu-item/app.menu-item.component';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MenubarModule} from 'primeng/menubar';



@NgModule({
    declarations: [
        AppMenuItemComponent,
        AppTopBarComponent,
        AppFooterComponent,
        AppMenuComponent,
        AppSidebarComponent,
        AppLayoutComponent,
        AppMenuItemComponent,
    ],
    exports: [
        AppSidebarComponent
    ],
    imports: [
        CommonModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive,
        MenubarModule,
    ]
})
export class AppLayoutModule { }
