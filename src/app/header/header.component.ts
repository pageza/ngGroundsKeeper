import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: string = 'Zach'
  currentRoute: string =''
  constructor(
    private _router: Router
  ) {
    _router.events.forEach( event => {
      if (event instanceof NavigationEnd) {
        console.log(event.url)
        this.currentRoute = event.url
      }
    })
  }

  ngOnInit(): void {
  }
  showWorkOrdersLink() {
    return this.currentRoute != '/workorders';
  }
}
