import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schools-list',
  templateUrl: './schools-list.component.html',
  styleUrls: ['./schools-list.component.css']
})
export class SchoolsListComponent implements OnInit {
  schools: string[] = ['Smoky Hill', 'Laredo','Independence', 'Sky Vista', 'Overland']
  constructor() { }

  ngOnInit(): void {
  }

}
