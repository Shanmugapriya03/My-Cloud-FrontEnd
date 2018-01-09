import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth-service.service';
@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth : AuthService) { }

  ngOnInit() {
  }

}
