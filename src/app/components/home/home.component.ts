import { Component,HostListener, OnInit  } from '@angular/core';
import { HomecarouselComponent } from '../homecarousel/homecarousel.component';
import { PackagesComponent } from "../packages/packages.component";
import { computeMsgId } from '@angular/compiler';
import { CommonModule } from '@angular/common';
import { HomepackageComponent } from '../homepackage/homepackage.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomecarouselComponent, PackagesComponent,CommonModule,HomepackageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  
  customerCount: number = 50;
  displayCustomerCount: number = 0;
  destinationCount: number = 165;
  displayDestinationCount: number = 0;
  partnerCount: number = 100;
  displayPartnerCount: number = 0;

  customerInterval: any;
  destinationInterval: any;
  partnerInterval: any;

  constructor() { }

  ngOnInit(): void { }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.checkScroll('customerCounter', this.customerCount, 'displayCustomerCount', 'customerInterval');
    this.checkScroll('travelDestinationsCounter', this.destinationCount, 'displayDestinationCount', 'destinationInterval');
    this.checkScroll('partnersCounter', this.partnerCount, 'displayPartnerCount', 'partnerInterval');
  }

  checkScroll(elementId: string, target: number, displayCountProp: keyof HomeComponent, intervalProp: keyof HomeComponent): void {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const scrollPosition = window.innerHeight;

      if (elementPosition < scrollPosition && this[displayCountProp] === 0) {
        this.startCount(target, displayCountProp, intervalProp);
      }
    }
  }

  startCount(target: number, displayCountProp: keyof HomeComponent, intervalProp: keyof HomeComponent): void {
    const duration = 1500; // 1.5 seconds in milliseconds
    const step = target / (duration / 20); // Calculate the step for each interval (every 20ms)

    this[intervalProp] = setInterval(() => {
      if (this[displayCountProp] < target) {
        this[displayCountProp] = Math.round(this[displayCountProp] + step);
        if (this[displayCountProp] >= target) {
          this[displayCountProp] = target;
          clearInterval(this[intervalProp]);
        }
      }
    }, 20); // Update every 20 milliseconds
  }
}
