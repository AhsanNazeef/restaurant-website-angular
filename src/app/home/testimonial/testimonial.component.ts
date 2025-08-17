import { Component } from '@angular/core';

type Testimonial = {
  testimonialText: string;
  imgSrc: string;
  username: string;
  profession: string;
};

@Component({
  selector: 'app-testimonial',
  standalone: false,
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss'
})
export class TestimonialComponent {
  testimonials: Testimonial[] = [
    {
      testimonialText: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam stet justo sed est sed',
      imgSrc: '/assets/images/testimonial-1.jpg',
      username: 'Client Name',
      profession: 'Profession'
    },
    {
      testimonialText: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam stet justo sed est sed',
      imgSrc: '/assets/images/testimonial-3.jpg',
      username: 'Client Name',
      profession: 'Profession'
    },
    {
      testimonialText: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam stet justo sed est sed',
      imgSrc: '/assets/images/testimonial-3.jpg',
      username: 'Client Name',
      profession: 'Profession'
    }
  ];
}
