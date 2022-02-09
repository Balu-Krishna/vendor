import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepromotionsComponent } from './createpromotions.component';

describe('CreatepromotionsComponent', () => {
  let component: CreatepromotionsComponent;
  let fixture: ComponentFixture<CreatepromotionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatepromotionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatepromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
