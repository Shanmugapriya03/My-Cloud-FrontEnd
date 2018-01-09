import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  private isUserLoggedIn:boolean;
  constructor() {
      this.isUserLoggedIn = false;
  }

  setUserLoggedIn(){
    this.isUserLoggedIn = true;
  }
  unSetUserLoggedIn(){
    return this.isUserLoggedIn = false;
  }
  getUserLoggedIn(){
    return this.isUserLoggedIn;
  }
}
