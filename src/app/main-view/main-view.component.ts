import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  school: any
  constructor(
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe( params => {
      this.school = params.name
    })
  }

}
