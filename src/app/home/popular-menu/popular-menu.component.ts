import { Component } from '@angular/core';
import { faCoffee, faHamburger, faUtensils } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-popular-menu',
  standalone: false,
  templateUrl: './popular-menu.component.html',
  styleUrl: './popular-menu.component.scss'
})
export class PopularMenuComponent {
  menuTypes = [
    { label: 'Popular', type: 'Breakfast', icon: faCoffee },
    { label: 'Special', type: 'Lunch', icon: faHamburger },
    { label: 'Lovely', type: 'Dinner', icon: faUtensils }
  ];
  selectedIndex = 0;
  breakFastMenuItems = [
    { name: 'Pancakes', description: 'Fluffy pancakes with syrup and butter', price: 5.99, imgSrc: '/assets/images/menu-1.png' },
    { name: 'Omelette', description: 'Cheese and vegetable omelette with herbs', price: 6.99, imgSrc: '/assets/images/menu-2.jpg' },
    { name: 'French Toast', description: 'Cinnamon French toast with berries and whipped cream', price: 7.49, imgSrc: '/assets/images/menu-3.jpg' },
    { name: 'Breakfast Burrito', description: 'Egg and cheese burrito with salsa verde', price: 8.49, imgSrc: '/assets/images/menu-4.jpg' },
    { name: 'Cinnamon Roll', description: 'Sweet cinnamon roll with icing sugar', price: 3.99, imgSrc: '/assets/images/menu-5.png' },
    { name: 'Avocado Toast', description: 'Smashed avocado on toasted bread with chili flakes', price: 9.99, imgSrc: '/assets/images/menu-6.jpg' },
    { name: 'Dinner Roll', description: 'Soft and fluffy dinner roll with butter', price: 2.49, imgSrc: '/assets/images/menu-7.jpg' },
    { name: 'Fruit Salad', description: 'Fresh seasonal fruit salad with mint leaves', price: 4.99, imgSrc: '/assets/images/menu-8.jpg' }
  ];
  lunchMenuItems = [
    { name: 'Caesar Salad', description: 'Crisp romaine lettuce with Caesar dressing', price: 7.99, imgSrc: '/assets/images/menu-8.jpg' },
    {
      name: 'Grilled Chicken Sandwich',
      description: 'Juicy grilled chicken with lettuce and tomato',
      price: 8.99,
      imgSrc: '/assets/images/menu-7.jpg'
    },
    { name: 'Vegetable Stir Fry', description: 'Mixed vegetables stir-fried in soy sauce', price: 9.49, imgSrc: '/assets/images/menu-6.jpg' },
    {
      name: 'Caprese Salad',
      description: 'Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze',
      price: 8.49,
      imgSrc: '/assets/images/menu-5.png'
    },
    { name: 'Minestrone Soup', description: 'Hearty vegetable soup with beans and pasta', price: 6.99, imgSrc: '/assets/images/menu-4.jpg' },
    { name: 'Fruit Smoothie', description: 'Blend of seasonal fruits with yogurt', price: 5.49, imgSrc: '/assets/images/menu-3.jpg' },
    {
      name: 'Quinoa Salad',
      description: 'Nutritious quinoa salad with vegetables and lemon dressing',
      price: 7.49,
      imgSrc: '/assets/images/menu-2.jpg'
    },
    { name: 'Grilled Vegetable Wrap', description: 'Grilled vegetables with hummus in a wrap', price: 8.49, imgSrc: '/assets/images/menu-1.png' }
  ];
  dinnerMenuItems = [
    {
      name: 'Spaghetti Carbonara',
      description: 'Classic Italian pasta with creamy sauce and pancetta',
      price: 12.99,
      imgSrc: '/assets/images/menu-7.jpg'
    },
    { name: 'Grilled Salmon', description: 'Fresh salmon fillet grilled to perfection', price: 14.99, imgSrc: '/assets/images/menu-8.jpg' },
    { name: 'Vegetable Lasagna', description: 'Layers of pasta with ricotta and spinach', price: 11.49, imgSrc: '/assets/images/menu-6.jpg' },
    {
      name: 'Chicken Alfredo',
      description: 'Fettuccine pasta with creamy Alfredo sauce and grilled chicken',
      price: 13.49,
      imgSrc: '/assets/images/menu-2.jpg'
    },
    {
      name: 'Beef Tacos',
      description: 'Soft tacos filled with seasoned beef and fresh toppings',
      price: 10.99,
      imgSrc: '/assets/images/menu-1.png'
    },
    { name: 'Vegetable Curry', description: 'Spicy vegetable curry served with rice', price: 9.99, imgSrc: '/assets/images/menu-3.jpg' },
    {
      name: 'Fruit Tart',
      description: 'Delicious fruit tart with a buttery crust and creamy filling',
      price: 6.49,
      imgSrc: '/assets/images/menu-5.png'
    },
    { name: 'Chocolate Mousse', description: 'Rich chocolate mousse topped with whipped cream', price: 5.99, imgSrc: '/assets/images/menu-4.jpg' }
  ];

  selectedMenuItem = this.breakFastMenuItems;

  selectType(index: number) {
    this.selectedIndex = index;
    switch (index) {
      case 0:
        this.selectedMenuItem = this.breakFastMenuItems;
        break;
      case 1:
        this.selectedMenuItem = this.lunchMenuItems;
        break;
      case 2:
        this.selectedMenuItem = this.dinnerMenuItems;
        break;
      default:
        this.selectedMenuItem = this.breakFastMenuItems;
    }
  }
}
