import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-workorders-list',
  templateUrl: './workorders-list.component.html',
  styleUrls: ['./workorders-list.component.css']
})
export class WorkordersListComponent implements OnInit {
  @Input() school: any
  constructor() { }

  ngOnInit(): void {
  }

}
