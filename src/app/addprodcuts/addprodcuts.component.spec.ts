import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprodcutsComponent } from './addprodcuts.component';

describe('AddprodcutsComponent', () => {
  let component: AddprodcutsComponent;
  let fixture: ComponentFixture<AddprodcutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddprodcutsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprodcutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
