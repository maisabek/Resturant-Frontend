import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PortalLayoutComponent } from './components/layout/portal-layout/portal-layout.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',
    component: PortalLayoutComponent,
    children: [
      { path: 'index', component: HomeComponent },
      { path: '', redirectTo: 'home/index', pathMatch: 'full' },
      { path: 'profile', component: UserProfileComponent }
      // Add more routes here if needed
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
