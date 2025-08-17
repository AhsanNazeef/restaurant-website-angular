import { Component } from '@angular/core';

type TeamMember = {
  fullName: string;
  designation: string;
  imgSrc: string;
  facebookUrl: string;
  twitterUrl: string;
  instagramUrl: string;
};

@Component({
  selector: 'app-team-members',
  standalone: false,
  templateUrl: './team-members.component.html',
  styleUrl: './team-members.component.scss'
})
export class TeamMembersComponent {
  teamMembers: TeamMember[] = [
    {
      fullName: 'Full Name',
      designation: 'Designation',
      imgSrc: '/assets/images/chef-1.png',
      facebookUrl: 'https://facebook.com',
      twitterUrl: 'https://X.com',
      instagramUrl: 'https://instagram.com'
    },
    {
      fullName: 'Full Name',
      designation: 'Designation',
      imgSrc: '/assets/images/chef-2.png',
      facebookUrl: 'https://facebook.com',
      twitterUrl: 'https://X.com',
      instagramUrl: 'https://instagram.com'
    },
    {
      fullName: 'Full Name',
      designation: 'Designation',
      imgSrc: '/assets/images/chef-3.png',
      facebookUrl: 'https://facebook.com',
      twitterUrl: 'https://X.com',
      instagramUrl: 'https://instagram.com'
    },
    {
      fullName: 'Full Name',
      designation: 'Designation',
      imgSrc: '/assets/images/chef-4.png',
      facebookUrl: 'https://facebook.com',
      twitterUrl: 'https://X.com',
      instagramUrl: 'https://instagram.com'
    }
  ];
}
