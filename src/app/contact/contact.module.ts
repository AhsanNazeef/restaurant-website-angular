import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactComponent } from './contact.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [ContactComponent, HeroComponent, ContactUsComponent],
  imports: [CommonModule, RouterLink, FontAwesomeModule, SharedModule, FormsModule]
})
export class ContactModule {}
