import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotfoundComponent} from './feature/notfound/notfound.component';
import {AppLayoutComponent} from './layout/app.layout.component';

const routes: Routes = [
  {
    path: '', component: AppLayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./feature/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'profile-settings', loadChildren: () => import('./feature/profiles-settings/profiles-settings.module').then(m => m.ProfilesSettingsModule) },
      { path: 'protection-settings', loadChildren: () => import('./feature/protection-settings/protection-settings.module').then(m => m.ProtectionSettingsModule) },
    ]
  },
  // { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
  // { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
  {path: 'notfound', component: NotfoundComponent},
  {path: '**', redirectTo: '/notfound'},
]
  // {scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload'}
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
