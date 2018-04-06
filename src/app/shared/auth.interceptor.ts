 import { HttpInterceptor,HttpRequest,HttpHandler,
          HttpSentEvent,HttpHeaderResponse,HttpProgressEvent,
          HttpResponse, HttpUserEvent, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { AuthService } from "../services/auth.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

  constructor(public authService: AuthService){

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      //const copiedRequest = req.clone({ headers : req.headers.append('', '')  });
      const copiedReq = req.clone({ params : req.params.set('auth', this.authService.getToken())});
      console.log('Intercepted!', copiedReq);
      return next.handle(copiedReq);
      //return next.handle(req);
  }
}
