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
import { FormIpProfileComponent } from './components/ip-profile/form-ip-profile/form-ip-profile.component';
import {SplitButtonModule} from 'primeng/splitbutton';
import {InputSwitchModule} from 'primeng/inputswitch';
import {CheckboxModule} from 'primeng/checkbox';


@NgModule({
  declarations: [ProfilesSettingsComponent, IpProfileComponent, FormIpProfileComponent],
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
    CheckboxModule
  ]
})
export class ProfilesSettingsModule { }
