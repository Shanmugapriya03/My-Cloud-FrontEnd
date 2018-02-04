import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  containers=[];
  data=[];
  constructor(private http:Http) {

  }
  ngOnInit() {
    this.http.get('http://localhost:8000/dashboard')
        .subscribe(
          (res:Response)=> {
            console.log(res.json());
            this.data=res.json();
            console.log(this.data[0]["container id"]);
          }
        );
  }

}
