import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  standalone: false,
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  imageTransform = '';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY;
    const rotate = -scrollY * 0.1;
    this.imageTransform = `rotate(${rotate}deg)`;
  }
}
