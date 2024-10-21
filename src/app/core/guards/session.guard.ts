import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const sessionGuard: CanActivateFn = (route, state): boolean => {
  const cookieService = inject( CookieService )
  const router = inject(Router) 
  return checkCookieSession(cookieService,router);
};



function checkCookieSession(cookieService : CookieService,router: Router): boolean {

  try {
    const token: boolean = cookieService.check('token');
    if(!token){
      router.navigate(['/','auth'])
    }
    return token
  } catch (error) {
    console.log('Token no permitido',error)
    return false;
  }
}