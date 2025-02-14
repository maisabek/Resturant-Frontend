import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'auth/login', pathMatch: 'full'},

  {
    path:'auth',
    loadChildren:()=>import("../app/Modules/auth/auth.module").then(m=>m.AuthModule)
  },
  {
    path:'home',
    loadChildren:()=>import("../app/Modules/portal/portal.module").then(m=>m.PortalModule)
  },
  {
    path:'dashboard',
    loadChildren:()=>import("../app/Modules/admin/admin.module").then(m=>m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
