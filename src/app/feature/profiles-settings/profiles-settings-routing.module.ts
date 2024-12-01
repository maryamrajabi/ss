import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfilesSettingsComponent} from './profiles-settings.component';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  { path: '', component: ProfilesSettingsComponent },
  { path: 'ip-profile', component: ProfilesSettingsComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule]
})
export class ProfilesSettingsRoutingModule { }
