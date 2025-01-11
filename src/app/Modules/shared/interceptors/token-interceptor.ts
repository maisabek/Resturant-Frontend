import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { catchError, map, Observable, throwError } from "rxjs";
import { AuthService } from "../../auth/services/auth.service";
import { Injectable } from "@angular/core";
import { LoadingBarService } from "@ngx-loading-bar/core";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService,
    private _loadingBarService: LoadingBarService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._loadingBarService.start();
    const token = this.authService.getToken();
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      })
    }
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        this._loadingBarService.complete();
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        this._loadingBarService.complete();
        return throwError(error);
      })
    )
  }
}
