import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSectionPricesComponent } from './filter-section-prices.component';

describe('FilterSectionPricesComponent', () => {
  let component: FilterSectionPricesComponent;
  let fixture: ComponentFixture<FilterSectionPricesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterSectionPricesComponent]
    });
    fixture = TestBed.createComponent(FilterSectionPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
