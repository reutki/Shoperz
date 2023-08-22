import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesNavBarComponent } from './categories-nav-bar.component';

describe('CategoriesNavBarComponent', () => {
  let component: CategoriesNavBarComponent;
  let fixture: ComponentFixture<CategoriesNavBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriesNavBarComponent]
    });
    fixture = TestBed.createComponent(CategoriesNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
