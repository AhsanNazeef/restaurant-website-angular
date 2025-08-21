import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactComponent } from './contact.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [ContactComponent, HeroComponent],
  imports: [CommonModule, RouterLink]
})
export class ContactModule {}
