import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-container',
  templateUrl: './create-container.component.html',
  styleUrls: ['./create-container.component.css',
              '../../header/header.component.css']
})
export class CreateContainerComponent implements OnInit {
  data=[];
  containerName='';
  imageName='';
  constructor(private http:Http,private router: Router) { }

  selectImage(image){
    this.imageName=image.repository;
  }
  createContainer(){
    if(this.imageName==''){
      window.alert('please select an image to create container');
    }else{
      this.http.get('http://localhost:8000/dashboard/createContainer?imageName='+this.imageName+'&containerName='+this.containerName).subscribe(
        (res:Response)=> {
          if(res.json().status){
              this.router.navigate(['dashboard/containers']);
          }else{
              window.alert('Some Internal Error Occured. Try Again !');
          }
        }
      )
    }
  }
  ngOnInit() {
    this.http.get('http://localhost:8000/dashboard/create')
        .subscribe(
          (res:Response)=> {
            this.data=res.json();
          }
        );
  }

}
