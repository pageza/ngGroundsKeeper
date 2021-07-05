import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWorkorderComponent } from './create-workorder.component';
import {RouterTestingModule} from "@angular/router/testing";

describe('CreateWorkorderComponent', () => {
  let component: CreateWorkorderComponent;
  let fixture: ComponentFixture<CreateWorkorderComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateWorkorderComponent ],
      imports: [RouterTestingModule]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWorkorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
