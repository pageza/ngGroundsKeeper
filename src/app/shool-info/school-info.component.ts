import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-school-info',
  templateUrl: './school-info.component.html',
  styleUrls: ['./school-info.component.css']
})
export class SchoolInfoComponent implements OnInit {

  @Input() school: any

  constructor() {  }

  ngOnInit(): void {

  }


}
