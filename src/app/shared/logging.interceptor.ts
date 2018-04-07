import { HttpInterceptor,HttpRequest,HttpHandler,
         HttpSentEvent,HttpHeaderResponse,HttpProgressEvent,
         HttpResponse, HttpUserEvent, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { AuthService } from "../services/auth.service";
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/do';

export class LoggingInterceptor implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(req).do(
          event => {
              console.log('Logging interceptor',event);
          });
    }
}
