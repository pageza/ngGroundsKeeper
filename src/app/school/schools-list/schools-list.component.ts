import {Component, OnInit, OnDestroy} from '@angular/core';
import {SchoolsService} from "../../schools.service";

@Component({
  selector: 'app-schools-list',
  templateUrl: './schools-list.component.html',
  styleUrls: ['./schools-list.component.css']
})
export class SchoolsListComponent implements OnInit, OnDestroy {

  schools: any

  // @ts-ignore
  private schoolsSubscription

  constructor(
    private schoolsService: SchoolsService
  ) { }

  ngOnInit(): void {
    this.getSchools()
  }

  getSchools() {
    this.schoolsSubscription = this.schoolsService.getSchoolsService()
      .subscribe( data => {
        this.schools = data
      })
  }

  ngOnDestroy() {
    this.schoolsSubscription.unsubscribe()
  }
}
