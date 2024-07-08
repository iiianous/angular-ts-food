import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SvgIconComponent, provideAngularSvgIcon } from 'angular-svg-icon'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { ProductComponent } from './product/product.component';
import { ServicesComponent } from './services/services.component';
import { HotItWorksComponent } from './hot-it-works/hot-it-works.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './shared/components/search/search/search.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { LogoComponent } from './shared/components/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ProductComponent,
    ServicesComponent,
    HotItWorksComponent,
    FooterComponent,
    SearchComponent,
    TestimonialComponent,
    SubscribeComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SvgIconComponent
  ],
  providers: [provideAngularSvgIcon()],
  bootstrap: [AppComponent]
})
export class AppModule { }
