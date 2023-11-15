import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SectionHeroComponent } from './components/section-hero/section-hero.component';
import { SectionWelcomeComponent } from './components/section-welcome/section-welcome.component';
import { SectionStartComponent } from './components/section-start/section-start.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    HeaderComponent,
    FooterComponent,
    SectionHeroComponent,
    SectionWelcomeComponent,
    SectionStartComponent,
  ],
  standalone: true,
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
