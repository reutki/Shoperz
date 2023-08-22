import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardV1Component } from './product-card-v1.component';

describe('ProductCardV1Component', () => {
  let component: ProductCardV1Component;
  let fixture: ComponentFixture<ProductCardV1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCardV1Component]
    });
    fixture = TestBed.createComponent(ProductCardV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
