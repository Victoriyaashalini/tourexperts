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
  packageDetails: TourPackage | undefined;

  constructor(private route: ActivatedRoute, private tourPackageService: DestinationserviceService) {}

  ngOnInit(): void {
    const location = this.route.snapshot.paramMap.get('location')!;
    const country = this.route.snapshot.paramMap.get('country')!;

    this.tourPackageService.getTourPackages().subscribe(packages => {
      this.packageDetails = packages.find(pkg => pkg.location === location && pkg.country === country);
    });
  }
}
