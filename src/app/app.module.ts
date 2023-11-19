import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormControlsModule } from './core/modules/form-controls.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SectionHeroComponent } from './components/section-hero/section-hero.component';
import { SectionWelcomeComponent } from './components/section-welcome/section-welcome.component';
import { SectionStartComponent } from './components/section-start/section-start.component';
import { SwiperComponent } from './components/swiper/swiper.component';
import { SwiperDirective } from './directives/swiper.directive';

import { register } from 'swiper/element/bundle';
import { MegamenuProductsComponent } from './components/header/megamenu-products/megamenu-products.component';
import { SectionLinkComponent } from './components/shared/section-link/section-link.component';

// SWIPER
register();

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormControlsModule,
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    MegamenuProductsComponent,
    SectionLinkComponent,
    FooterComponent,
    SectionHeroComponent,
    SectionWelcomeComponent,
    SectionStartComponent,
    SwiperComponent,
    SwiperDirective,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
