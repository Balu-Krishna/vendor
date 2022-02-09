import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderrelatedComponent } from './orderrelated.component';

describe('OrderrelatedComponent', () => {
  let component: OrderrelatedComponent;
  let fixture: ComponentFixture<OrderrelatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderrelatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderrelatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
