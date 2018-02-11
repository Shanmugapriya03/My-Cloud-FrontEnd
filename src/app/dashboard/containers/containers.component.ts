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

    containers=[];
    data=[];
    value:any;
  constructor(private http:Http) {
  }

  ngOnInit() {
    this.http.get('http://localhost:8000/dashboard/containers')
        .subscribe(
          (res:Response)=> {
            this.data=res.json();
            // to retrive created time
            for(var con of this.data){
              var date = new Date();
              var conDate = new Date(con.Created);
              if(date.getDate()-conDate.getDate() != 0){
                this.value = date.getDate()-conDate.getDate();
                this.value +=" days";
              }else if(date.getHours()-conDate.getHours() !=0){
                this.value = date.getHours()-conDate.getHours();
                this.value +=" hours";
              }else if(date.getMinutes()-conDate.getMinutes() !=0){
                this.value = date.getMinutes()-conDate.getMinutes();
                this.value +=" minutes";
              }else{
                this.value = date.getSeconds()-conDate.getSeconds();
                this.value +=" seconds";
              }
            }
          }
        );
  }

}
