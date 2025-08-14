import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  faBars = faBars;
  showNavLinks = false;

  toggleNavLinks() {
    this.showNavLinks = !this.showNavLinks;
  }
}
