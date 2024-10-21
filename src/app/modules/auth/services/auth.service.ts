import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private ULR = environment.api

  constructor(private httpClient : HttpClient , private cookie: CookieService)  { }

  public  sendCredentials( email:string, password: string): Observable<any> {
    const body = {email, password}
    return this.httpClient.post(`${this.ULR}/auth/login`, body )
      .pipe( 
        tap( (resp: any) => {
          const { tokenSession, data } = resp
          this.cookie.set('token', tokenSession, 4, '/' )
        })
      )
    
  }

}
