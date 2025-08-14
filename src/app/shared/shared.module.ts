import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from './button/button.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [ButtonComponent, NavbarComponent, FooterComponent],
  imports: [CommonModule, FontAwesomeModule, RouterLink, RouterLinkActive],
  exports: [ButtonComponent, NavbarComponent, FooterComponent]
})
export class SharedModule {}
