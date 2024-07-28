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
  filteredTours: any[] = [];

  constructor(private destinationService: DestinationserviceService) {}

  onKeywordSelected(keyword: string) {
    this.destinationService.filterTourPackages(keyword).subscribe(tours => {
      this.filteredTours = tours;
    });
  }
  }
 

