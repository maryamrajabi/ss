import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilesSettingsRoutingModule } from './profiles-settings-routing.module';
import {InputTextModule} from 'primeng/inputtext';
import {DialogModule} from 'primeng/dialog';
import {InputNumberModule} from 'primeng/inputnumber';
import {TableModule} from 'primeng/table';
import {FileUploadModule} from 'primeng/fileupload';
import {ButtonModule} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {RatingModule} from 'primeng/rating';
import {DropdownModule} from 'primeng/dropdown';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ToastModule} from 'primeng/toast';
import {RippleModule} from 'primeng/ripple';
import {FormsModule} from '@angular/forms';
import {ProfilesSettingsComponent} from './profiles-settings.component';
import { IpProfileComponent } from './components/ip-profile/ip-profile.component';
import {AppLayoutModule} from "../../layout/app.layout.module";
import {SidebarModule} from 'primeng/sidebar';
import {TooltipModule} from 'primeng/tooltip';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {SplitButtonModule} from 'primeng/splitbutton';
import {InputSwitchModule} from 'primeng/inputswitch';
import {CheckboxModule} from 'primeng/checkbox';
import { IcmpProfileComponent } from './components/icmp-profile/icmp-profile.component';
import { NtpProfileComponent } from './components/ntp-profile/ntp-profile.component';
import { TcpProfileComponent } from './components/tcp-profile/tcp-profile.component';
import { DnsProfileComponent } from './components/dns-profile/dns-profile.component';
import {SidebarComponent} from '../../shared/sidebar/sidebar.component';
import {ToolbarComponentComponent} from '../../shared/toolbar-component/toolbar-component.component';
import {TableComponentComponent} from '../../shared/table-component/table-component.component';
import {BaseLayoutComponentComponent} from '../../shared/base-layout-component/base-layout-component.component';


@NgModule({
  declarations: [ProfilesSettingsComponent, IpProfileComponent, IcmpProfileComponent, NtpProfileComponent, TcpProfileComponent, DnsProfileComponent],
  imports: [
    CommonModule,
    TableModule,
    FileUploadModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    ToastModule,
    ToolbarModule,
    RatingModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    RadioButtonModule,
    InputNumberModule,
    DialogModule,
    ProfilesSettingsRoutingModule,
    AppLayoutModule,
    FormsModule,
    TooltipModule,
    OverlayPanelModule,
    TableModule,
    ConfirmDialogModule,
    SidebarModule,
    RippleModule,
    ConfirmPopupModule,
    SplitButtonModule,
    InputSwitchModule,
    CheckboxModule,
    SidebarComponent,
    ToolbarComponentComponent,
    TableComponentComponent,
    BaseLayoutComponentComponent
  ]
})
export class ProfilesSettingsModule { }
