import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfilesSettingsComponent} from './profiles-settings.component';
import {HttpClientModule} from '@angular/common/http';
import {IpProfileComponent} from './components/ip-profile/ip-profile.component';
import {DnsProfileComponent} from './components/dns-profile/dns-profile.component';
import {TcpProfileComponent} from './components/tcp-profile/tcp-profile.component';
import {NtpProfileComponent} from './components/ntp-profile/ntp-profile.component';
import {IcmpProfileComponent} from './components/icmp-profile/icmp-profile.component';

const routes: Routes = [
  // {path: '', component: ProfilesSettingsComponent},
  {
    path: '',
    component: ProfilesSettingsComponent,
    children: [
      {path: 'ip-profile', component: IpProfileComponent},
      {path: 'icmp-profile', component: IcmpProfileComponent},
      {path: 'ntp-profile', component: NtpProfileComponent},
      {path: 'tcp-profile', component: TcpProfileComponent},
      {path: 'dns-profile', component: DnsProfileComponent},
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
