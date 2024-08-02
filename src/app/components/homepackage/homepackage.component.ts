import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepackage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepackage.component.html',
  styleUrl: './homepackage.component.scss'
})
export class HomepackageComponent {
  packageTypes = [
    { title: 'India', image: 'assets/images/india.jpg', description: 'Explore the diverse cultures and beautiful landscapes of India.', link: '/india' },
    { title: 'International', image: '../../../assets/images/internation_11zon.jpg', description: 'Discover exciting international destinations and experiences.', link: '/international' },
    { title: 'Honeymoon', image: '../../../assets/images/honeymoon-min_11zon.jpg', description: 'Create unforgettable memories on a romantic honeymoon getaway.', link: '/honeymoon' },

    { title: 'Island', image: '../../../assets/images/island_11zon.jpg', description: 'Relax on stunning islands with crystal-clear waters and white sandy beaches.', link: '/island' },
    { title: 'Group Tour', image: '../../../assets/images/group_11zon.jpg', description: 'Join fun-filled group tours to explore destinations with fellow travelers.', link: '/group-tour' },
    { title: 'Family Tour', image: '../../../assets/images/debraj-purkayastha-4feZ0Teq55c-unsplash (1).jpg', description: 'Enjoy family-friendly vacations with activities for all ages.', link: '/family-tour' }
  ];

  constructor(private router: Router) {}

  navigateTo(link: string): void {
    this.router.navigate([link]);
  }
}
