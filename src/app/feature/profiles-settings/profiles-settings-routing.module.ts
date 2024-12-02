import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfilesSettingsComponent} from './profiles-settings.component';
import {HttpClientModule} from '@angular/common/http';
import {IpProfileComponent} from './components/ip-profile/ip-profile.component';

const routes: Routes = [
  // {path: '', component: ProfilesSettingsComponent},
  {
    path: '',
    component: ProfilesSettingsComponent,
    children: [
      {path: 'ip-profile', component: IpProfileComponent},
    ]
  },
  {path: '**', redirectTo: '/'}

];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule]
})
export class ProfilesSettingsRoutingModule {
}
