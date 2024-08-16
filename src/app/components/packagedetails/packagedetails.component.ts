import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { DestinationserviceService,TourPackage } from '../../services/destinationservice.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-packagedetails',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterModule],
  templateUrl: './packagedetails.component.html',
  styleUrl: './packagedetails.component.scss'
})
export class PackagedetailsComponent implements OnInit {
  packageDetails!: TourPackage;

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
