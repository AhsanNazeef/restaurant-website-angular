import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from './button/button.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [ButtonComponent, NavbarComponent],
  imports: [CommonModule, FontAwesomeModule, RouterLink, RouterLinkActive],
  exports: [ButtonComponent, NavbarComponent]
})
export class SharedModule {}
