import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorpickupComponent } from './vendorpickup.component';

describe('VendorpickupComponent', () => {
  let component: VendorpickupComponent;
  let fixture: ComponentFixture<VendorpickupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorpickupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorpickupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
