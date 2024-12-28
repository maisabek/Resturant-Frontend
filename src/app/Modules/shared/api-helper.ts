import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "src/environments/environments";

@Injectable({
  providedIn: 'root'
})
export class ApiHelper {
  constructor(private http: HttpClient) {

  }

  get = (url: string, options = {}): Observable<any> => {
    let serverUrl =  `${environment.apiUrl}${url}`;
    return this.http.get(serverUrl, options);
  }

  post = (url: string, body: any,options={}): Observable<any> => {
    let serverUrl = `${environment.apiUrl}${url}`;
    return this.http.post(serverUrl, body,options );
  }

}
