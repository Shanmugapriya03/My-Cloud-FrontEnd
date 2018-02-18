import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';

@Component({
  selector: 'app-containers',
  templateUrl: './containers.component.html',
  styleUrls: ['./containers.component.css',
              '../../header/header.component.css'
  ]
})
export class ContainersComponent implements OnInit {

    data=[];
    value:any;
  constructor(private http:Http) {
  }

  ngOnInit() {
    this.http.get('http://localhost:8000/dashboard/containers')
        .subscribe(
          (res:Response)=> {
            this.data=res.json();
            //console.log(this.data);
          }
        );
  }

}
