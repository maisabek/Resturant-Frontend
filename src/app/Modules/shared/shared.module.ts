import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token-interceptor';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SpinnerInterceptor } from './interceptors/SpinnerInterceptor';
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
    LoadingBarModule,
    NgxSpinnerModule,
    CommonModule
  ],
  exports:[
    // NgwWowModule,
    // NgxTypedJsModule,
    // CarouselModule,
    LoadingBarModule,
    NgxSpinnerModule,
    ReactiveFormsModule
  ],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },

  ]
})
export class SharedModule { }
