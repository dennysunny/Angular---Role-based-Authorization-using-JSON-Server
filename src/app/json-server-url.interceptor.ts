import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JsonServerUrlInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let apiURL = " http://localhost:3000/";
    

    let jsonurl = request.clone({
      headers : request.headers.set('Authorozation' , 'Password'),
      setHeaders : {'Auth-header': 'bebfew54ehbud87e68f4ew3'},
      url : apiURL + request.url
    })

    

    return next.handle(jsonurl);
  }
}
