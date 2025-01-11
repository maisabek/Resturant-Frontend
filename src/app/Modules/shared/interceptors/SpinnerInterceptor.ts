import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { Observable, tap } from "rxjs";



@Injectable()
export class SpinnerInterceptor implements HttpInterceptor{
  constructor(private spinnerService: NgxSpinnerService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerService.show();
    return next.handle(req)
      .pipe(tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          setTimeout(() => {
            this.spinnerService.hide();
          }, 1000);
        }
      }, (error) => {
        this.spinnerService.hide();
      }));
  }

}
