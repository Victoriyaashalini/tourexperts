import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { DestinationserviceService,TourPackage } from '../../services/destinationservice.service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBill1Wave } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faCity } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-packagedetails',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterModule,FontAwesomeModule,FormsModule],
  templateUrl: './packagedetails.component.html',
  styleUrl: './packagedetails.component.scss'
})
export class PackagedetailsComponent implements OnInit {
  packageDetails!: TourPackage;
  faMapMarkerAlt = faMapMarkerAlt;
  faArrowRight = faArrowRight;
  faCloudSun = faCloudSun;
  faMoneyBillWave = faMoneyBill1Wave;
  faTimesCircle = faTimesCircle;
  faCheckCircle = faCheckCircle;
  faCity = faCity;
  faCalendarAlt = faCalendarAlt;
  faUsers = faUsers;
  faTag = faTag;
  faCheck = faCheck;
  faTimes = faTimes;
  faDollarSign = faDollarSign;

  selectedCurrency: string = 'INR';
  convertedPrice: number = 0;

  constructor(private route: ActivatedRoute, private tourPackageService: DestinationserviceService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const packageId = +params['id']; // Extract the package ID from the route parameters
      this.fetchPackageDetails(packageId);
    });
  }

  fetchPackageDetails(id: number): void {
    this.tourPackageService.getTourPackageById(id).subscribe(pkg => {
      if (pkg) {
        this.packageDetails = pkg;
        this.convertPrice(); // Convert price initially
      } else {
        console.error('Package not found with id:', id);
      }
    }, error => {
      console.error('Error fetching package details:', error);
    });
  }

  // Method to convert the price based on the selected currency
  convertPrice(): void {
    const priceInINR = parseFloat(this.packageDetails.price.replace(/[^0-9.-]+/g, ""));
    const conversionRate = 0.5; // Example conversion rate, replace with real value
    if (this.selectedCurrency === 'INR') {
      this.convertedPrice = priceInINR;
    } else if (this.selectedCurrency === this.packageDetails.currency) {
      this.convertedPrice = priceInINR * conversionRate;
    }
  }

  onCurrencyChange(): void {
    this.convertPrice();
  }
}
