import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { NavbarDashboardComponent } from './components/navbar-dashboard/navbar-dashboard.component';
import { ManagersListComponent } from './components/Managers/managers-list/managers-list.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { ItemsListComponent } from './components/items/items-list/items-list.component';
import { OrdersListComponent } from './components/orders/orders-list/orders-list.component';
import { BranchesListComponent } from './components/branches/branches-list/branches-list.component';


@NgModule({
  declarations: [
    DashboardLayoutComponent,
    SideMenuComponent,
    NavbarDashboardComponent,
    ManagersListComponent,
    UsersListComponent,
    ItemsListComponent,
    OrdersListComponent,
    BranchesListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
