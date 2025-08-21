import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  standalone: false,
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss'
})
export class MenuItemComponent {
  @Input() name!: string;
  @Input() description!: string;
  @Input() price!: number;
  @Input() imgSrc!: string;
}
