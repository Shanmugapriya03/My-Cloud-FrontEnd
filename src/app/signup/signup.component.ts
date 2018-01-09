import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private http:Http,private auth:AuthService,private router: Router) {
  }
  username='';
  password='';

  signup(){
    console.log('sign up');
    /*this.http.post('http://localhost:8000/signup?userName='+this.username+'&pass='+this.password)
      .subscribe(
        (res:Response) =>{
          console.log(res.json().status);
          if(status){
            this.auth.setUserLoggedIn();
          }
        }
      );*/
  }
  ngOnInit() {
  }

}
