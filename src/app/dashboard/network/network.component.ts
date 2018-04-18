import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';
import { SessionService } from '../../service/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css',
              '../../header/header.component.css']
})
export class NetworkComponent implements OnInit {
  containerIds=[];
  data=[];
  userN="";
  constructor(private http:Http,private session:SessionService,private router: Router) {
  }

  delContainer(id){
    //console.log('start '+container["container id"]);
    this.http.get('http://localhost:8000/dashboard/containers/del?id='+id)
      .subscribe(
        (res:Response)=>{
          if(res.json().status){
            alert('CONTAINER DELETED');
            this.router.navigate(['dashboard/containers']);
          }
        }
      );
  }
  ngOnInit() {
      this.userN=this.session.getSessionUser();
      this.http.get('http://localhost:8000/dashboard/networking?userN='+this.userN)
          .subscribe(
            (res:Response)=> {
              this.containerIds = res.json().containerIds;
              for(var i=0;i<this.containerIds.length;i++){
                console.log(this.containerIds[i].cId);
                this.http.get('http://localhost:8000/dashboard/inspect?id='+this.containerIds[i].cId)
                  .subscribe(
                    (res:Response) => {
                      //console.log(res.json());
                      this.data.push(res.json());
                    }
                  );
              }
            }
          );
  }

}
