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
  carouselIndex = 0; // Assuming you manage the index in your component logic

  destinations = [
    { title: 'PARIS', image: '../../../assets/images/pexels-tove-liu-2127454-3867371.jpg' },
    { title: 'JAPAN', image: '../../../assets/images/pexels-tomas-malik-793526-3408353.jpg' },
    { title: 'SYDNEY', image: '../../../assets/images/pexels-nathansalt-3386600.jpg' }
  ];
}
