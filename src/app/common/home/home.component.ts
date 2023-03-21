import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  token!:string;

  constructor(private location: Location, private auth : AuthService) {}

  ngOnInit(): void {
    this.auth.getToken();
  }

  goBack(): void {
    this.location.back();
  }


}
