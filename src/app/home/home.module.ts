import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { HomeComponent } from './home.component';
import { DetailsSectionComponent } from './details-section/details-section.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { TeamMembersComponent } from './team-members/team-members.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    HeroSectionComponent,
    DetailsSectionComponent,
    AboutUsComponent,
    TestimonialComponent,
    TeamMembersComponent,
    ReservationsComponent
  ],
  imports: [FontAwesomeModule, CommonModule, SharedModule, ReactiveFormsModule]
})
export class HomeModule {}
