import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../service/auth-service.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthService,private router:Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(!this.authService.getUserLoggedIn()){
          //console.log('navigate to login');
          this.router.navigate(['login']);
      }
    return true;
  }
}
