import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

export interface TourPackage {
  id: number;
  packagename: string;
  description: string;
  tourtype:string;
  location: string;
  country: string;
  price: string; // Updated to string to include both price and currency
  duration: string; // Updated to string to include both days and nights
  includes: string;
  excludes: string;
  imageUrl: string;
  additionalImages: string[];
  itinerary: { day: string, description: string }[];
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
