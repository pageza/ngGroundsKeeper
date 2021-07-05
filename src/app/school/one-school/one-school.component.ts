import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-one-school',
  templateUrl: './one-school.component.html',
  styleUrls: ['./one-school.component.css']
})
export class OneSchoolComponent implements OnInit {
  school: any
  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe( params => {
      this.school = params.name
    })
  }
  createWorkorder() {
    this._router.navigate(['/workorder/create/', this.school])
  }

}
