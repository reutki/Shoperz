import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppwrapperComponent } from './appwrapper.component';

describe('AppwrapperComponent', () => {
  let component: AppwrapperComponent;
  let fixture: ComponentFixture<AppwrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppwrapperComponent]
    });
    fixture = TestBed.createComponent(AppwrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
