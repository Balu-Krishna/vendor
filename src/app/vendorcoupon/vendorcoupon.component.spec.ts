import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorcouponComponent } from './vendorcoupon.component';

describe('VendorcouponComponent', () => {
  let component: VendorcouponComponent;
  let fixture: ComponentFixture<VendorcouponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorcouponComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorcouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
