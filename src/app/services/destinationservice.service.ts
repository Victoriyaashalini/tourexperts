import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

export interface TourPackage {
  id: number;
  packagename: string;
  tourtype: string;
  keywords: string[];
  description: string;
  imageUrl: string;
  location: string;
  country: string;
  duration: number;
  GroupSize: number; // Add this property
  bestTimeToVisit: string; // Add this property
  citiesCovered: string; // Add this property
  includes: string;
  excludes: string;
  Languages: string;
  currency: string; // Add this property
  weatherUpdates: string; // Add this property
  additionalImages: string[];
  itinerary: { day: string; description: string }[];
  price: string;
  continent:string;
  destinationType: 'Package' | 'Location';
}
@Injectable({
  providedIn: 'root'
})
export class DestinationserviceService {
 
  private dataUrl = '../../assets/tour-packages.json';

  constructor(private http: HttpClient) {}

  getTourPackages(): Observable<TourPackage[]> {
    return this.http.get<TourPackage[]>(this.dataUrl);
  }

  getTourPackageById(id: number): Observable<TourPackage | undefined> {
    return this.getTourPackages().pipe(
      map((packages: TourPackage[]) => packages.find((pkg: TourPackage) => pkg.id === id))
    );
  }
}
