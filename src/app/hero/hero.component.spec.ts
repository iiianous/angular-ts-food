import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroComponent } from './hero.component';
import { LogoComponent } from '../shared/components/logo/logo.component';
import { MainNavComponent } from '../shared/components/main-nav/main-nav.component';
import { SearchComponent } from '../shared/components/search/search/search.component';
import { OrderNowComponent } from '../shared/components/order-now/order-now.component';

describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeroComponent,
        LogoComponent,
        MainNavComponent,
        SearchComponent,
        OrderNowComponent,
      ],
    });
    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
