import { Component, HostListener } from '@angular/core';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-back-to-top',
  standalone: false,
  templateUrl: './back-to-top.component.html',
  styleUrl: './back-to-top.component.scss'
})
export class BackToTopComponent {
  faArrowUp = faArrowUp;
  showButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrolled = window.scrollY > 100;
    const isFullScreen = window.innerHeight >= document.body.scrollHeight;
    this.showButton = scrolled && !isFullScreen;
  }

  @HostListener('window:resize', [])
  onResize() {
    const scrolled = window.scrollY > 100;
    const isFullScreen = window.innerHeight >= document.body.scrollHeight;
    this.showButton = scrolled && !isFullScreen;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
