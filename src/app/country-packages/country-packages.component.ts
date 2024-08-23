import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DestinationserviceService,TourPackage } from '../services/destinationservice.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-country-packages',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './country-packages.component.html',
  styleUrl: './country-packages.component.scss'
})
export class CountryPackagesComponent implements OnInit {
  countryPackages: TourPackage[] = [];
  countryName: string = '';

  constructor(private route: ActivatedRoute, private destinationService: DestinationserviceService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.countryName = params['country'];
      this.getCountryPackages(this.countryName);
    });
  }

  getCountryPackages(country: string): void {
    this.destinationService.getTourPackages().subscribe(packages => {
      this.countryPackages = packages.filter(pkg => pkg.country === country);
    });
  }
}
