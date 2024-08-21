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
  searchMode: string = 'Packages'; // Default to Packages

  constructor(private tourPackageService: DestinationserviceService) {}

  ngOnInit(): void {
    this.tourPackageService.getTourPackages().subscribe((packages) => {
      this.tourPackages = packages;
    });
  }

  formatter = (x: { location: string; country: string }) =>
    this.searchMode === 'Packages' ? x.country : x.location;

  search: OperatorFunction<string, readonly { location: string; country: string }[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) => (term.length < 2 ? [] : this.filterUniqueItems(term)))
    );

  setSearchMode(mode: string): void {
    this.searchMode = mode;
    this.clearSearch(); // Clears the current search input
  }

  filterUniqueItems(term: string): { location: string; country: string }[] {
    const regex = new RegExp(`^${term}`, 'i'); // Match from the start of the string
    const uniqueItems = new Set<string>();

    return this.tourPackages
      .filter((pkg) =>
        this.searchMode === 'Packages' ? regex.test(pkg.country) : regex.test(pkg.location)
      )
      .filter((pkg) => {
        const key = this.searchMode === 'Packages' ? pkg.country : pkg.location;
        if (uniqueItems.has(key)) {
          return false;
        } else {
          uniqueItems.add(key);
          return true;
        }
      })
      .map((pkg) => (this.searchMode === 'Packages' ? { location: '', country: pkg.country } : { location: pkg.location, country: '' }))
      .slice(0, 10); // Limit to 10 suggestions
  }

  get filteredPackages(): TourPackage[] {
    if (!this.model) {
      return this.tourPackages;
    }

    return this.tourPackages.filter((pkg) =>
      this.searchMode === 'Packages' ? pkg.country === this.model!.country : pkg.location === this.model!.location
    );
  }

  getPackageCount(): number {
    return this.filteredPackages.length;
  }

  clearSearch() {
    this.model = undefined;
  }

  onInputChange(value: string) {
    if (value === '') {
      this.clearSearch();
    }
  }
  }
 

