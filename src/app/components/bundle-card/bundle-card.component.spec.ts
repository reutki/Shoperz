import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BundleCardComponent } from './bundle-card.component';

describe('BundleCardComponent', () => {
  let component: BundleCardComponent;
  let fixture: ComponentFixture<BundleCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BundleCardComponent]
    });
    fixture = TestBed.createComponent(BundleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
