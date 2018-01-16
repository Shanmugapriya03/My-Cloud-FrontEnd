import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  containers=[];
  constructor() {
    this.containers=[
      {
        name:'ubuntu',
        ip:'124.51.32.1',
        created:'10 min',
        status:'Running'
      },
      {
        name:'hello-world',
        ip:'142.15.32.4',
        created:'40 min',
        status:'Running'
      },
      {
        name:'website',
        ip:'121.5.72.6',
        created:'10 min',
        status:'stopped'
      }
    ];
  }
  ngOnInit() {    
  }

}
