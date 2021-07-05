import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-one-workorder',
  templateUrl: './one-workorder.component.html',
  styleUrls: ['./one-workorder.component.css']
})
export class OneWorkorderComponent implements OnInit {
  id: any
  constructor(
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe( params => {
      this.id = params.id
    })
  }

}
