import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {SchoolsService} from "../../schools.service";
import {WorkordersService} from "../../workorders.service";

@Component({
  selector: 'app-school-info',
  templateUrl: './school-info.component.html',
  styleUrls: ['./school-info.component.css']
})
export class SchoolInfoComponent implements OnInit, OnDestroy, OnChanges {

  @Input() school: any

  schoolInfo: any
  schoolAddress: any = {}
  workOrderCount: any
  workOrders: any = []

  private schoolsSubscription: any
  private workOrdersSubscription: any

  constructor(
    private _schoolsService: SchoolsService,
    private _workOrdersService: WorkordersService
  ) {
  }

  ngOnInit(): void {
    this.schoolsSubscription = this._schoolsService.getSchoolInfoService(this.school)
      .subscribe( data => {
        this.schoolInfo = data
        this.schoolAddress = Object.values(this.schoolInfo[0])
        this.workOrdersSubscription = this._workOrdersService.getWorkOrderCountService(this.schoolInfo[0].id)
          .subscribe( data => {
            this.workOrderCount = data
            this.workOrderCount = Object.values(this.workOrderCount[0])[0]
          })
      })

  }
  ngOnChanges(changes: SimpleChanges) {
    this.ngOnInit()
  }

  ngOnDestroy() {
    this.schoolsSubscription.unsubscribe()
    this.workOrdersSubscription.unsubscribe()
  }
}
