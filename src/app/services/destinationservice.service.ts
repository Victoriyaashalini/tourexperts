import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface TourPackage {
  id: number;
  packagename: string;
  days: number;
  type: string;
  keywords: string[];
  description: string;
  imageUrl: string;
  location: string;
  country: string;
  price?: number;         // Make sure to include these properties if needed
  duration?: number;
  includes?: string;
  excludes?: string;
}

@Injectable({
  providedIn: 'root'
})
export class DestinationserviceService {
 

  private dataUrl = '../../assets/tourpackage.json';

  constructor(private http: HttpClient) {}

  getTourPackages(): Observable<TourPackage[]> {
    return this.http.get<TourPackage[]>(this.dataUrl);
  }
  getPackageById(id: string): Observable<TourPackage> {
    return this.http.get<TourPackage>(`${this.dataUrl}/${id}`);
  }
}
