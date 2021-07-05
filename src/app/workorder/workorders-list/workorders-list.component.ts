import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-workorders-list',
  templateUrl: './workorders-list.component.html',
  styleUrls: ['./workorders-list.component.css']
})
export class WorkordersListComponent implements OnInit {
  @Input() school: any
  schoolName: any
  activeWorkorders: any = [{'id':4}, {'id':5}, {'id':6}]
  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe( params => {
      this.schoolName = params.school
    })
  }

}
