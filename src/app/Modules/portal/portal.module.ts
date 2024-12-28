import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { PortalLayoutComponent } from './components/layout/portal-layout/portal-layout.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    PortalLayoutComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    // CarouselModule,
    SharedModule,
    PortalRoutingModule
  ]
})
export class PortalModule { }
