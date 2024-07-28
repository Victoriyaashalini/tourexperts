import { Component,EventEmitter, Output } from '@angular/core';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { DestinationserviceService } from '../../services/destinationservice.service';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, map, switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-typeheadfilter',
  standalone: true,
  imports: [NgbTypeaheadModule, FormsModule],
  templateUrl: './typeheadfilter.component.html',
  styleUrl: './typeheadfilter.component.scss'
})
export class TypeheadfilterComponent {
  @Output() keywordSelected = new EventEmitter<string>();
  inputValue: string = '';

  onSearch() {
    this.keywordSelected.emit(this.inputValue);
    this.clearInput();
  }

  clearInput() {
    this.inputValue = '';
  }
}
