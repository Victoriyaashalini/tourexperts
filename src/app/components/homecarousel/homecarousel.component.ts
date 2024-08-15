import { Component } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-homecarousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homecarousel.component.html',
  styleUrl: './homecarousel.component.scss',
  animations: [
    trigger('slideInStagger', [
      transition(':enter', [
        query('.col-md-4', [
          style({ transform: 'translateX(-100%)', opacity: 0 }),
          stagger('300ms', [
            animate('600ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
          ])
        ])
      ])
    ])
  ]
})
export class HomecarouselComponent {
 
  destinations: any[] = []; 
  constructor() { }

  ngOnInit(): void {
    this.destinations = [
      {
        title: 'Zanzibar',
        video: 'path-to-your-video/zanzibar.mp4' // Replace with the correct path to your video
      },
      {
        title: 'Morocco',
        video: 'path-to-your-video/morocco.mp4' // Replace with the correct path to your video
      },
      {
        title: 'Madagascar',
        video: 'path-to-your-video/madagascar.mp4' // Replace with the correct path to your video
      }
    ];
  }

}
