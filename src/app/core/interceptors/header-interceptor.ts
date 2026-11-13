import { HttpInterceptorFn } from '@angular/common/http';
import { Token } from '@angular/compiler';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  //request
  // if(req.url.includes('posts')){
  if(localStorage.getItem('socialToken')){

    req = req.clone({
      setHeaders:{
        token: localStorage.getItem('socialToken')!
      }
    })
  }
  
  return next(req); //response
};
