import { Component, DoCheck } from '@angular/core';
import { AuthService } from '../service/auth-service.service';
import { SessionService } from '../service/session.service';
import { Router } from '@angular/router';
@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements DoCheck {

  constructor(private auth : AuthService,private router: Router,private session : SessionService) { }
  check:boolean=false;
  ngDoCheck() {
    this.check = this.auth.getUserLoggedIn();
  }
  logout(){
    this.check = this.auth.unSetUserLoggedIn();
    this.session.clearSession();
  }
}
