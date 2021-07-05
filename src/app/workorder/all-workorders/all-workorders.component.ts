import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-workorders',
  templateUrl: './all-workorders.component.html',
  styleUrls: ['./all-workorders.component.css']
})
export class AllWorkordersComponent implements OnInit {
  completedWorkorders: any = [{'id':1}, {'id':2}, {'id':3}]
  activeWorkorders: any = [{'id':4}, {'id':5}, {'id':6}]
  constructor() { }

  ngOnInit(): void {
  }

}
