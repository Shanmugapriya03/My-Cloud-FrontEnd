import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:Http,private auth:AuthService,private router: Router) {
  }
  username='';
  password='';
  login(){
    this.http.get('http://localhost:8000/login?userName='+this.username+'&pass='+this.password)
      .subscribe(
        (res:Response) =>{
          console.log(res.json().status);
          if(res.json().status){
            this.auth.setUserLoggedIn();
            console.log('log'+this.auth.getUserLoggedIn());
            this.router.navigate(['dashboard']);
          }
        }
      );
  }
  ngOnInit() {
  }

}
