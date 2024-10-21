import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


export const injectSessionInterceptor: HttpInterceptorFn = (req, next) => {
  
  const cookieService = inject( CookieService )
  try {



    const token = cookieService.get('token')
    let newRequest = req
    newRequest = req.clone(
      {
        setHeaders: {
          authorization: `Bearer ${token}`,
          CUSTOM_HEADER: 'HOLA'
        }
      }
    )
    return next(newRequest);

  } catch (e) {
    console.log('🔴🔴🔴 Ojito error', e)
    return next(req );
  }

}
