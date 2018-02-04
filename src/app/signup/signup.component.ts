import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../../login-signup.css']
})
export class SignupComponent implements OnInit {

  constructor(private http:Http,private auth:AuthService,private router: Router) {
  }
  username='';
  password='';
  rpassword='';
  emptyUser:boolean=false;
  emptyPass:boolean=false;
  signup(){
    if(!(this.password===this.rpassword)){
      alert('password mismatch');
      this.router.navigate(['signup']);
    }else{
      this.http.get('http://localhost:8000/signup?userName='+this.username+'&pass='+this.password)
        .subscribe(
          (res:Response) =>{
            console.log(res.json());
            if(res.json().status){
              this.router.navigate(['login']);
            }
          }
        );
    }
  }
  ngOnInit() {
  }

}
