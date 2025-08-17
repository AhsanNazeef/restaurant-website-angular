import { Component, Input } from '@angular/core';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-testimonial-card',
  standalone: false,
  templateUrl: './testimonial-card.component.html',
  styleUrl: './testimonial-card.component.scss'
})
export class TestimonialCardComponent {
  @Input() testimonialText!: string;
  @Input() imgSrc!: string;
  @Input() username!: string;
  @Input() profession!: string;

  faQuoteLeft = faQuoteLeft;
}
