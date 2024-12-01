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


@NgModule({
  declarations: [ProfilesSettingsComponent],
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
    ProfilesSettingsRoutingModule
  ]
})
export class ProfilesSettingsModule { }
