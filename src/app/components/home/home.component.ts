import { Component,HostListener, OnInit,AfterViewInit  } from '@angular/core';
import { HomecarouselComponent } from '../homecarousel/homecarousel.component';
import { PackagesComponent } from "../packages/packages.component";
import { computeMsgId } from '@angular/compiler';
import { CommonModule } from '@angular/common';
import { HomepackageComponent } from '../homepackage/homepackage.component';
import { PopularcarouselComponent } from "../../secondorycomponent/popularcarousel/popularcarousel.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomecarouselComponent, PackagesComponent, CommonModule, HomepackageComponent, PopularcarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit  {
  
  customerCount: number = 50;
  displayCustomerCount: number = 0;
  destinationCount: number = 165;
  displayDestinationCount: number = 0;
  partnerCount: number = 100;
  displayPartnerCount: number = 0;

  customerInterval: any;
  destinationInterval: any;
  partnerInterval: any;



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
  private quote: string = 'Discover the World Like Never Before!';
  private words: string[] = [];
  private index: number = 0;
  private typingSpeed: number = 150; // Adjust this value to control the speed
  private effectStarted: boolean = false;

  constructor() {
    this.words = this.quote.split(' ');
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.observeSection();
  }

  observeSection() {
    const quoteSection = document.getElementById('quoteSection');
    if (quoteSection) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.effectStarted) {
            this.effectStarted = true;
            this.typeWriterEffect();
          }
        });
      }, {
        threshold: 0.1 // Trigger the effect when 10% of the section is visible
      });

      observer.observe(quoteSection);
    }
  }

  typeWriterEffect() {
    if (this.index < this.words.length) {
      const quoteElement = document.getElementById('quote');
      if (quoteElement) {
        // Add up to three words at a time
        const nextWords = this.words.slice(this.index, this.index + 2).join(' ');
        quoteElement.innerHTML += nextWords + '<br>';
        this.index += 2;
        setTimeout(() => this.typeWriterEffect(), this.typingSpeed); // Adjust speed here
      }
    }
  }
}
