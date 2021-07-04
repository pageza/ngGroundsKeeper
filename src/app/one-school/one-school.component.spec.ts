import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneSchoolComponent } from './one-school.component';

describe('OneSchoolComponent', () => {
  let component: OneSchoolComponent;
  let fixture: ComponentFixture<OneSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneSchoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
