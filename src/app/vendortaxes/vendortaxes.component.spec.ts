import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendortaxesComponent } from './vendortaxes.component';

describe('VendortaxesComponent', () => {
  let component: VendortaxesComponent;
  let fixture: ComponentFixture<VendortaxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendortaxesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendortaxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
