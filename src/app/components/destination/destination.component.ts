import { Component, ViewEncapsulation } from '@angular/core';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, filter } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';
import { DestinationserviceService,TourPackage } from '../../services/destinationservice.service';
import { HttpClientModule } from '@angular/common/http';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-destination',
  standalone: true,
  imports: [NgbTypeaheadModule, FormsModule, JsonPipe,CommonModule,HttpClientModule,RouterLink],
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.scss',
  encapsulation: ViewEncapsulation.None ,
})
export class DestinationComponent {
  model: { location: string; country: string } | undefined;
  tourPackages: TourPackage[] = [];
  searchTerm: string = '';

  constructor(private tourPackageService: DestinationserviceService) {}

  ngOnInit(): void {
    this.tourPackageService.getTourPackages().subscribe(packages => {
      this.tourPackages = packages;
    });
  }

  formatter = (x: { location: string; country: string }) => `${x.location}, ${x.country}`;

  search: OperatorFunction<string, readonly { location: string; country: string }[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? [] : this.filterUniqueLocations(term))
    );

  filterUniqueLocations(term: string): { location: string; country: string }[] {
    const regex = new RegExp(`^${term}`, 'i'); // Match from the start of the string
    const uniqueLocations = new Set<string>();

    return this.tourPackages
      .filter(pkg => regex.test(pkg.location) || regex.test(pkg.country))
      .filter(pkg => {
        const key = `${pkg.location}, ${pkg.country}`;
        if (uniqueLocations.has(key)) {
          return false;
        } else {
          uniqueLocations.add(key);
          return true;
        }
      })
      .map(pkg => ({ location: pkg.location, country: pkg.country }))
      .slice(0, 10); // Limit to 10 suggestions
  }

  get filteredPackages(): TourPackage[] {
    if (!this.model) {
      return this.tourPackages;
    }

    return this.tourPackages.filter(pkg =>
      pkg.location === this.model!.location && pkg.country === this.model!.country
    );
  }
  }
 

