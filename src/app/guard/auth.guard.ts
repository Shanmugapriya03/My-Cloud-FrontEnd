import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { SessionService } from '../service/session.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private session:SessionService,private router: Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.session.getSessionLength()!=0){
      return true;
    }else{
      window.alert("You don't have permission to view this page");
      this.router.navigate(['login']);
    }
  }
}
