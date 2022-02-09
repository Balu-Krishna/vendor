import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendortermsComponent } from './vendorterms.component';

describe('VendortermsComponent', () => {
  let component: VendortermsComponent;
  let fixture: ComponentFixture<VendortermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendortermsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendortermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
