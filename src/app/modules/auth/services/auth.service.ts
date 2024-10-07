import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public age  = 0;
  private name = ''


  constructor() { }

  public  sendCredentials( email:string, password: string): void {

    return
  }

}
