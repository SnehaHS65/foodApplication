import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFoodOrderComponent } from './all-food-order.component';

describe('AllFoodOrderComponent', () => {
  let component: AllFoodOrderComponent;
  let fixture: ComponentFixture<AllFoodOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllFoodOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFoodOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
