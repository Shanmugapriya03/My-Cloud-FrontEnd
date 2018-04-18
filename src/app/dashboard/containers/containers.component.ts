import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';
import { SessionService } from '../../service/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-containers',
  templateUrl: './containers.component.html',
  styleUrls: ['./containers.component.css',
              '../../header/header.component.css'
  ]
})
export class ContainersComponent implements OnInit {

    data=[];
    Data=[];
    value:any;
    userN="";
    containerIds=[];
  constructor(private http:Http,private router: Router,private session:SessionService) {
  }
  startContainer(container){
    //console.log('start '+container["container id"]);
    this.http.get('http://localhost:8000/dashboard/containers/start?id='+container["container id"])
      .subscribe(
        (res:Response)=>{
          if(res.json().status){
            alert('CONTAINER STARTED');
            this.router.navigate(['dashboard/networking']);
          }
        }
      );
  }
  stopContainer(container){
    //console.log('stop '+container["container id"]);
    this.http.get('http://localhost:8000/dashboard/containers/stop?id='+container["container id"])
      .subscribe(
        (res:Response)=>{
          if(res.json().status){
            alert('CONTAINER STOPPED');
            this.router.navigate(['dashboard/networking']);
          }
        }
      );
  }
  ngOnInit() {
    this.userN=this.session.getSessionUser();
    this.http.get('http://localhost:8000/dashboard/containers?userN='+this.userN)
        .subscribe(
          (res:Response)=> {
            this.Data=res.json().data;
            this.containerIds = res.json().containerIds;
            //console.log(this.Data);
            //console.log(this.containerIds);
            for(var j=0;j<this.containerIds.length;j++){
              for(var i=0;i<this.Data.length;i++){
                if(parseInt(this.containerIds[j].cId) === parseInt(this.Data[i]["container id"])){
                  //console.log(this.containerIds[j].cId+' '+this.Data[i]["container id"]);
                  this.data.push(this.Data[i]);
                }
              }
            }
          }
        );
  }

}
