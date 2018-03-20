import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css',
              '../header/header.component.css']
})
export class DashboardComponent implements OnInit {
  data=[];
  constructor(private http:Http) {

  }
  ngOnInit() {
    this.http.get('http://localhost:8000/dashboard/sysinfo')
        .subscribe(
          (res:Response)=> {
            this.data=res.json();
          }
        );
  }

}
