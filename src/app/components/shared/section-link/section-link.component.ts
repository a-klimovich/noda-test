import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-link',
  templateUrl: './section-link.component.html',
  styleUrl: './section-link.component.scss'
})
export class SectionLinkComponent {
  @Input() href: string = '#'

  @Input() arrowLeft: boolean = false
  @Input() arrowRight: boolean = false
}
