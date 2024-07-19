import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { ProductComponent } from './product/product.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { HotItWorksComponent } from './hot-it-works/hot-it-works.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './shared/components/logo/logo.component';
import { MainNavComponent } from './shared/components/main-nav/main-nav.component';
import { SearchComponent } from './shared/components/search/search/search.component';
import { OrderNowComponent } from './shared/components/order-now/order-now.component';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent,
        HeroComponent,
        ProductComponent,
        ServicesComponent,
        TestimonialComponent,
        HotItWorksComponent,
        SubscribeComponent,
        FooterComponent,
        LogoComponent,
        MainNavComponent,
        SearchComponent,
        OrderNowComponent,
      ],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-ts-food'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-ts-food');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-ts-food');
  });
});
