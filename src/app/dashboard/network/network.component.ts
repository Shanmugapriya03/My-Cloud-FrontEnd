import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css',
              '../../header/header.component.css']
})
export class NetworkComponent implements OnInit {
  
  constructor(private http:Http) {
  }

  ngOnInit() {

  }

}
