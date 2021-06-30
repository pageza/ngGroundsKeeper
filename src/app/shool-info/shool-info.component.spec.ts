import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoolInfoComponent } from './shool-info.component';

describe('ShoolInfoComponent', () => {
  let component: ShoolInfoComponent;
  let fixture: ComponentFixture<ShoolInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoolInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoolInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
