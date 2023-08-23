import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardV2Component } from './product-card-v2.component';

describe('ProductCardV2Component', () => {
  let component: ProductCardV2Component;
  let fixture: ComponentFixture<ProductCardV2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCardV2Component]
    });
    fixture = TestBed.createComponent(ProductCardV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
