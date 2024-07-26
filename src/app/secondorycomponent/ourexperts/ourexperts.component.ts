import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ourexperts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ourexperts.component.html',
  styleUrl: './ourexperts.component.scss'
})
export class OurexpertsComponent {
  teamMembers = [
    { name: 'Ajay', title: 'Executive Director', image: '../../../assets/images/ankush-minda-uPIDtOdCINY-unsplash.jpg' },
    { name: 'Caroline', title: 'Director - Operations', image: '../../../assets/images/christopher-campbell-rDEOVtE7vOs-unsplash.jpg' },
    { name: 'Shakshi', title: 'Team - Central', image: '../../../assets/images/ehsan-ahmadi-vsWy6nchcOs-unsplash.jpg' },
    { name: 'Krishna', title: 'Team Member', image: '../../../assets/images/sergio-de-paula-c_GmwfHBDzk-unsplash - Copy.jpg' },
    { name: 'Ashwin', title: 'Executive Director', image: '../../../assets/images/reza-biazar-eSjmZW97cH8-unsplash - Copy.jpg' },
    { name: 'Rahul', title: 'Director - Operations', image: '../../../assets/images/ransford-quaye-DzAFv1iVMGg-unsplash.jpg' },
    { name: 'Amir', title: 'Team - Central', image: '../../../assets/images/amir-seilsepour-Pc0ToyoR5Xo-unsplash.jpg' },
    { name: 'Anushka', title: 'Team Member', image: '../../../assets/images/ali-pazani-9uaNYCqjDLw-unsplash.jpg' },
    // Add more members as needed
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
