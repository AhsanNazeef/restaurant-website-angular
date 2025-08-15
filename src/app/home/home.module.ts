import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { HomeComponent } from './home.component';
import { DetailsSectionComponent } from './details-section/details-section.component';

@NgModule({
  declarations: [HomeComponent, HeroSectionComponent, DetailsSectionComponent],
  imports: [FontAwesomeModule, CommonModule, SharedModule]
})
export class HomeModule {}
