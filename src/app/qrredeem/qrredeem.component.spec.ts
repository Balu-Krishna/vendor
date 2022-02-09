import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrredeemComponent } from './qrredeem.component';

describe('QrredeemComponent', () => {
  let component: QrredeemComponent;
  let fixture: ComponentFixture<QrredeemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrredeemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QrredeemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
