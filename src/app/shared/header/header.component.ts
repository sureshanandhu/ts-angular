import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  //header title
  title = "ts angular demo app ";

  //navigation menu
  routes = [
    { linkName: 'Home', url: '/home' },
    { linkName: 'Resource', url: '/resource' },
    { linkName: 'Users', url: '/users' }
  ]  
}
