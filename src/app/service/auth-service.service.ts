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

  getUserLoggedIn(){
    return this.isUserLoggedIn;
  }
}
