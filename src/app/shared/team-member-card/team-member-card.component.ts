import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-member-card',
  standalone: false,
  templateUrl: './team-member-card.component.html',
  styleUrl: './team-member-card.component.scss'
})
export class TeamMemberCardComponent {
  @Input() fullName!: string;
  @Input() designation!: string;
  @Input() imgSrc!: string;
  @Input() facebookUrl!: string;
  @Input() twitterUrl!: string;
  @Input() instagramUrl!: string;
}
