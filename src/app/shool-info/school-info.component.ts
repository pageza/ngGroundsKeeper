import { Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-school-info',
  templateUrl: './school-info.component.html',
  styleUrls: ['./school-info.component.css']
})
export class SchoolInfoComponent implements OnInit {
  params: any
  school: any
  constructor(private _route: ActivatedRoute) {
    this.getParams()
  }
  ngOnInit(): void {
    this.school = this.getParams()
    console.log(this.school)
  }
  getParams() {
    this._route.params.subscribe( params => this.params = params)
  }

}
