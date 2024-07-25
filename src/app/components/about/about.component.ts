import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForOf } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,NgForOf],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  animations: [
    trigger('heightChange', [
      state('expanded', style({
        height: '90vh'
      })),
      state('collapsed', style({
        height: '30vh' // Height for larger screens or default collapsed state
      })),
      transition('expanded => collapsed', [
        animate('1.5s ease') // Adjust duration for collapse
      ]),
      transition('collapsed => expanded', [
        animate('1s ease') // Duration for expand
      ])
    ]),
    trigger('slideIn', [
      state('void', style({
        transform: 'translateX(-100%)',
        opacity: 0
      })),
      state('*', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('void => *', [
        animate('0.5s ease-out')
      ])
    ]),
  ]
  
  
})
export class AboutComponent {
  items = [
    { title: 'Ajay', department: 'Executive Director',image:'../../../assets/images/ankush-minda-uPIDtOdCINY-unsplash.jpg' },
    { title: 'Caroline', department: 'Director - Operations',image:'../../../assets/images/christopher-campbell-rDEOVtE7vOs-unsplash.jpg' },
    { title: 'Shakshi', department: 'Team - Accounts',image:'../../../assets/images/ehsan-ahmadi-vsWy6nchcOs-unsplash.jpg' },
    { title: 'Deepak', department: 'Team - Sales & Operations',image:'../../../assets/images/sergio-de-paula-c_GmwfHBDzk-unsplash - Copy.jpg' },
    { title: 'Ashwin', department: 'Team - Executions',image:'../../../assets/images/reza-biazar-eSjmZW97cH8-unsplash - Copy.jpg' },
    { title: 'Rahul', department: 'Team - Design & Development',image:'../../../assets/images/ransford-quaye-DzAFv1iVMGg-unsplash.jpg' },
    { title: 'Amir', department: 'Team - Design & Development',image:'../../../assets/images/amir-seilsepour-Pc0ToyoR5Xo-unsplash.jpg' },
    { title: 'Anushka', department: 'Team - Quality',image:'../../../assets/images/ali-pazani-9uaNYCqjDLw-unsplash.jpg' },
 ];
 isAnimated = false;
 isMobile = false;

 @HostListener('window:resize', ['$event'])
 onResize(event: Event) {
   this.checkViewport();
 }

 ngOnInit() {
   this.checkViewport();
 }

 checkViewport() {
   this.isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed
 }

 animateDown() {
   this.isAnimated = true;
 }
}