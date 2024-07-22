import { Component } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
@Component({
  selector: 'app-homecarousel',
  standalone: true,
  imports: [],
  templateUrl: './homecarousel.component.html',
  styleUrl: './homecarousel.component.scss',
  animations: [
    trigger('slideIn', [
      state('void', style({ opacity: 0, transform: 'translateX(100%)' })),
      transition(':enter', [
        animate('1s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        animate('1s ease-in', style({ opacity: 0, transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})
export class HomecarouselComponent {
  carouselIndex: number = 0;
}
