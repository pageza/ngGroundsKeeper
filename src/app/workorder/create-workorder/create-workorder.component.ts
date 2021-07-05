import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-create-workorder',
  templateUrl: './create-workorder.component.html',
  styleUrls: ['./create-workorder.component.css']
})
export class CreateWorkorderComponent implements OnInit {
  school: any
  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe( params => {
      this.school = params.school
    })
  }
  submitWorkorder(){
    console.log('This will submit the Work Order to the API for validation before sending to the database')
    // TODO: submit form to API for validation and entry to database
    this._router.navigate(['/school',this.school])
  }
}
