import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProtectionSettingsComponent} from './protection-settings.component';
import {AddressesComponent} from './components/addresses/addresses.component';
import {ProtectionPoliciesComponent} from './components/protection-policies/protection-policies.component';

const routes: Routes = [
  {
    path: '',
    component: ProtectionSettingsComponent,
    children: [
      {path: 'addresses', component: AddressesComponent},
      {path: 'protection-policies', component: ProtectionPoliciesComponent},
    ]
  },
  {path: '**', redirectTo: '/'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectionSettingsRoutingModule { }
