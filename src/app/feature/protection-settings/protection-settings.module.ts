import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectionSettingsRoutingModule } from './protection-settings-routing.module';
import { ProtectionSettingsComponent } from './protection-settings.component';
import { AddressesComponent } from './components/addresses/addresses.component';
import { ProtectionPoliciesComponent } from './components/protection-policies/protection-policies.component';
import {ButtonDirective} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule} from '@angular/forms';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {PrimeTemplate} from 'primeng/api';
import {RadioButtonModule} from 'primeng/radiobutton';
import {Ripple} from 'primeng/ripple';
import {SidebarModule} from 'primeng/sidebar';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {ToolbarComponentComponent} from '../../shared/toolbar-component/toolbar-component.component';
import {SidebarComponent} from "../../shared/sidebar/sidebar.component";
import { AclComponent } from './components/acl/acl.component';
import {TableComponentComponent} from '../../shared/table-component/table-component.component';


@NgModule({
  declarations: [
    ProtectionSettingsComponent,
    AddressesComponent,
    ProtectionPoliciesComponent,
    AclComponent
  ],
  imports: [
    CommonModule,
    ProtectionSettingsRoutingModule,
    ButtonDirective,
    CheckboxModule,
    DialogModule,
    DropdownModule,
    FormsModule,
    InputNumberModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    PrimeTemplate,
    RadioButtonModule,
    Ripple,
    SidebarModule,
    TableModule,
    ToastModule,
    ToolbarModule,
    ToolbarComponentComponent,
    SidebarComponent,
    TableComponentComponent
  ],
})
export class ProtectionSettingsModule { }
