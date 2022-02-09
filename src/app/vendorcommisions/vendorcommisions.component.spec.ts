import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorcommisionsComponent } from './vendorcommisions.component';

describe('VendorcommisionsComponent', () => {
  let component: VendorcommisionsComponent;
  let fixture: ComponentFixture<VendorcommisionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorcommisionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorcommisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
