import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from './button/button.component';
import { DetailsCardComponent } from './details-card/details-card.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TeamMemberCardComponent } from './team-member-card/team-member-card.component';
import { TestimonialCardComponent } from './testimonial-card/testimonial-card.component';

@NgModule({
  declarations: [ButtonComponent, NavbarComponent, FooterComponent, DetailsCardComponent, TestimonialCardComponent, TeamMemberCardComponent],
  imports: [CommonModule, FontAwesomeModule, RouterLink, RouterLinkActive],
  exports: [ButtonComponent, NavbarComponent, FooterComponent, DetailsCardComponent, TestimonialCardComponent, TeamMemberCardComponent]
})
export class SharedModule {}
