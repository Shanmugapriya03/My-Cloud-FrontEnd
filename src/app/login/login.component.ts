import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:Http) {
  }
  username='';
  password='';
  login(){
    this.http.get('http://localhost:8000/login?userName='+this.username+'&pass='+this.password)
      .subscribe(
        (res:Response) =>{
          console.log(res.json())
        }
      );
  }
  ngOnInit() {
  }

}
