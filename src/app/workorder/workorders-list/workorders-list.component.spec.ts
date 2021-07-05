import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkordersListComponent } from './workorders-list.component';
import {RouterTestingModule} from "@angular/router/testing";

describe('WorkordersListComponent', () => {
  let component: WorkordersListComponent;
  let fixture: ComponentFixture<WorkordersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkordersListComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkordersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
