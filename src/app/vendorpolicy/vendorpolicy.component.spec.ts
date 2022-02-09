import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorpolicyComponent } from './vendorpolicy.component';

describe('VendorpolicyComponent', () => {
  let component: VendorpolicyComponent;
  let fixture: ComponentFixture<VendorpolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorpolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorpolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
