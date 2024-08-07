import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popularcarousel',
  standalone: true,
  imports: [NgbCarousel,CommonModule],
  templateUrl: './popularcarousel.component.html',
  styleUrl: './popularcarousel.component.scss'
})
export class PopularcarouselComponent {
 
}
