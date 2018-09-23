import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userEmail: string;

  constructor() { }

  ngOnInit() {
    this.userEmail = localStorage.getItem('loginEmail');
  }

}
