import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { ManagersListComponent } from './components/Managers/managers-list/managers-list.component';
import { ItemsListComponent } from './components/items/items-list/items-list.component';
import { OrdersListComponent } from './components/orders/orders-list/orders-list.component';
import { BranchesListComponent } from './components/branches/branches-list/branches-list.component';

const routes: Routes = [
  {path:'',
    component:DashboardLayoutComponent,
    children:[
      {path:"users",component:UsersListComponent},
      {path:"managers",component:ManagersListComponent},
      {path:"Items",component:ItemsListComponent},
      {path:"orders",component:OrdersListComponent},
      {path:"branches",component:BranchesListComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
