import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: false,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() label: string = 'Label';
  @Output() clicked = new EventEmitter<void>();

  handleClick() {
    this.clicked.emit()
  }
}
