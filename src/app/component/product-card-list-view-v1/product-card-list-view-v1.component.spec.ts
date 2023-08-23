import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardListViewV1Component } from './product-card-list-view-v1.component';

describe('ProductCardListViewV1Component', () => {
  let component: ProductCardListViewV1Component;
  let fixture: ComponentFixture<ProductCardListViewV1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCardListViewV1Component]
    });
    fixture = TestBed.createComponent(ProductCardListViewV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
