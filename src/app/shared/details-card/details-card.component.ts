import { Component, Input, SimpleChanges } from '@angular/core';
import { faCartPlus, faHeadphones, faUser, faUtensils } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-details-card',
  standalone: false,
  templateUrl: './details-card.component.html',
  styleUrl: './details-card.component.scss'
})
export class DetailsCardComponent {
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() icon: 'user' | 'utensils' | 'cart-plus' | 'headphones' = 'user';

  faUser = faUser;
  faUtensils = faUtensils;
  faCartPlus = faCartPlus;
  faHeadphones = faHeadphones;

  userChoice = faUser;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['icon']) {
      switch (this.icon) {
        case 'user':
          this.userChoice = this.faUser;
          break;
        case 'utensils':
          this.userChoice = this.faUtensils;
          break;
        case 'cart-plus':
          this.userChoice = this.faCartPlus;
          break;
        case 'headphones':
          this.userChoice = this.faHeadphones;
          break;
      }
    }
  }
}
