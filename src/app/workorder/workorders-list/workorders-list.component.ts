import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WorkordersService} from "../../workorders.service";

@Component({
  selector: 'app-workorders-list',
  templateUrl: './workorders-list.component.html',
  styleUrls: ['./workorders-list.component.css']
})
export class WorkordersListComponent implements OnInit, OnDestroy, OnChanges {
  @Input() school: any

  schoolName: any
  workOrders: any = []

  workOrderSubscription: any

  constructor(
    private _route: ActivatedRoute,
    private _workOrdersService: WorkordersService
) { }

  ngOnInit(): void {
    this._route.params.subscribe( params => {
      this.schoolName = params.school
    })
    this.workOrderSubscription = this._workOrdersService.getWorkOrdersForSchool(this.school)
      .subscribe( data => {
        this.workOrders = data
      })

  }

  ngOnChanges(changes: SimpleChanges) {
    this.ngOnInit()
  }

  ngOnDestroy() {
    this.workOrderSubscription.unsubscribe()
  }
}
