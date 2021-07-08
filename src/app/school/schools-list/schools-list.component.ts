import {Component, OnInit, OnDestroy} from '@angular/core';
import {SchoolsService} from "../../schools.service";

@Component({
  selector: 'app-schools-list',
  templateUrl: './schools-list.component.html',
  styleUrls: ['./schools-list.component.css']
})
export class SchoolsListComponent implements OnInit, OnDestroy {

  schools: any = ['Smoky', 'Overland']

  // @ts-ignore
  private schoolsSubscription

  constructor(
    private schoolsService: SchoolsService
  ) { }

  ngOnInit(): void {
    this.getSchools()
  }

  getSchools() {
    this.schoolsSubscription = this.schoolsService.getSchools()
      .subscribe( data => {
        this.schools = data
      })
  }

  ngOnDestroy() {
    this.schoolsSubscription.unsubscribe()
  }
}
