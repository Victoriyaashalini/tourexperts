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

@Component({
  selector: 'app-packagedetails',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterModule,FontAwesomeModule],
  templateUrl: './packagedetails.component.html',
  styleUrl: './packagedetails.component.scss'
})
export class PackagedetailsComponent implements OnInit {
  packageDetails!: TourPackage;
  faMapMarkerAlt = faMapMarkerAlt;
  faArrowRight =faArrowRight ;
  faCloudSun =faCloudSun;
  faMoneyBillWave =faMoneyBill1Wave;
  faTimesCircle = faTimesCircle;
  faCheckCircle = faCheckCircle;
  faCity =faCity;
  faCalendarAlt = faCalendarAlt;
  faUsers =faUsers;
  faTag =faTag;
  faCheck =faCheck;
  faTimes =faTimes;
  faDollarSign =faDollarSign;



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
        console.log('Package Details:', this.packageDetails); // Debugging
      } else {
        console.error('Package not found with id:', id); // Debugging
      }
    }, error => {
      console.error('Error fetching package details:', error); // Debugging
    });
  }
}
