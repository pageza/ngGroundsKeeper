import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneWorkorderComponent } from './one-workorder.component';
import {RouterTestingModule} from "@angular/router/testing";

describe('OneWorkorderComponent', () => {
  let component: OneWorkorderComponent;
  let fixture: ComponentFixture<OneWorkorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneWorkorderComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneWorkorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
