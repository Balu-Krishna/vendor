import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoremanagamentComponent } from './storemanagament.component';

describe('StoremanagamentComponent', () => {
  let component: StoremanagamentComponent;
  let fixture: ComponentFixture<StoremanagamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoremanagamentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoremanagamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
