import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/index';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.css']
})
export class UnauthorizedComponent implements OnInit {

  constructor(private service:AuthService) { }

  ngOnInit() {
  }
  login() {
    this.service.startSigninMainWindow();
  }

  goback() {
    // this.location.back();
  }
}
