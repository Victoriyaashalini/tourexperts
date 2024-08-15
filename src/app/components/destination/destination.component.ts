import { Component, ViewEncapsulation } from '@angular/core';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, filter } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';
import { DestinationserviceService,TourPackage } from '../../services/destinationservice.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-destination',
  standalone: true,
  imports: [NgbTypeaheadModule, FormsModule, JsonPipe,CommonModule,HttpClientModule],
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.scss',
  encapsulation: ViewEncapsulation.None ,
})
export class DestinationComponent {
  model: TourPackage | undefined;
  tourPackages: TourPackage[] = [];

  constructor(private tourPackageService: DestinationserviceService) {}

  ngOnInit(): void {
    this.tourPackageService.getTourPackages().subscribe(packages => {
      this.tourPackages = packages;
    });
  }

  formatter = (pkg: TourPackage) => pkg.packagename;

  search: OperatorFunction<string, readonly TourPackage[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? [] : this.tourPackages.filter(pkg => new RegExp(term, 'mi').test(pkg.packagename)).slice(0, 10))
    );

  get filteredPackages(): TourPackage[] {
    if (!this.model) {
      return this.tourPackages;
    }
    return this.tourPackages.filter(pkg => pkg.packagename === this.model?.packagename);
  }
  }
 

