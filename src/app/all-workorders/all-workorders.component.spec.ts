import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllWorkordersComponent } from './all-workorders.component';

describe('AllWorkordersComponent', () => {
  let component: AllWorkordersComponent;
  let fixture: ComponentFixture<AllWorkordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllWorkordersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllWorkordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
