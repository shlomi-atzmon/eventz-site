import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../users/services/auth.service';


@Injectable()
export class MyInterceptor implements HttpInterceptor {

  constructor(public auth: AuthService) {
     
  }
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let token = this.auth.getToken();
    if (token) {
      request = request.clone({
        setHeaders: {
          'x-auth-token': token
        }
      });
    }
   
    return next.handle(request);
  }
}