import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// import {HttpClientModule} from '@angular/common/http'
// import { CarouselModule } from 'ngx-owl-carousel-o';
// import { NgxTypedJsModule } from 'ngx-typed-js';
// import { NgwWowModule } from 'ngx-wow';


@NgModule({
  declarations: [

  ],
  imports: [
    ReactiveFormsModule,
    // NgwWowModule,
    // NgxTypedJsModule,
    // CarouselModule,
    CommonModule
  ],
  exports:[
    // NgwWowModule,
    // NgxTypedJsModule,
    // CarouselModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
