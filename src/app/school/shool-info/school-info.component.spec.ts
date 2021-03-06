import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolInfoComponent } from './school-info.component';

describe('ShoolInfoComponent', () => {
  let component: SchoolInfoComponent;
  let fixture: ComponentFixture<SchoolInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
