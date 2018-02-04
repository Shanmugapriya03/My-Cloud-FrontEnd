import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {
  userName="";
  length=0;
  constructor() { }

  setSessionUser(user){
    this.userName=user;
    sessionStorage.setItem("usernameSession",this.userName);
  }

  getSessionUser(){
    return this.userName;
  }

  getSessionLength(){
    this.length = sessionStorage.length;
    return this.length;
  }

  clearSession(){
    sessionStorage.clear();
  }
}
