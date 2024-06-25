import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotItWorksComponent } from './hot-it-works.component';

describe('HotItWorksComponent', () => {
  let component: HotItWorksComponent;
  let fixture: ComponentFixture<HotItWorksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotItWorksComponent]
    });
    fixture = TestBed.createComponent(HotItWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
