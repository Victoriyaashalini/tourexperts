import { Component } from '@angular/core';
import { DestinationserviceService } from '../../services/destinationservice.service';
import { TypeheadfilterComponent } from '../../secondorycomponent/typeheadfilter/typeheadfilter.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-destination',
  standalone: true,
  imports: [TypeheadfilterComponent,CommonModule],
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.scss'
})
export class DestinationComponent {
  allTours: any[] = [];
  filteredTours: any[] = [];

  constructor(private destinationService: DestinationserviceService) {}

  ngOnInit() {
    this.loadAllTours();
  }

  loadAllTours() {
    this.destinationService.getTourPackages().subscribe(tours => {
      this.allTours = tours;
      this.filteredTours = tours; // Initially display all tours
    });
  }

  onKeywordSelected(keyword: string) {
    this.filteredTours = this.allTours.filter(tour => 
      tour.country.toLowerCase().includes(keyword.toLowerCase())
    );
  }
  }
 

