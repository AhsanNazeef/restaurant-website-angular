import { Component } from '@angular/core';

type Card = {
  icon: 'user' | 'utensils' | 'cart-plus' | 'headphones';
  title: string;
  content: string;
};

@Component({
  selector: 'app-details-section',
  standalone: false,
  templateUrl: './details-section.component.html',
  styleUrl: './details-section.component.scss'
})
export class DetailsSectionComponent {
  cards: Card[] = [
    {
      icon: 'user',
      title: 'Master Chefs',
      content: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'
    },
    {
      icon: 'utensils',
      title: 'Quality Food',
      content: 'Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
    },
    {
      icon: 'cart-plus',
      title: 'Online Order',
      content: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.'
    },
    {
      icon: 'headphones',
      title: '24/7 Service',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ];
}
