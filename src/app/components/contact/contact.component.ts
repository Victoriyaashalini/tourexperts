import { Component,AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { ContactformComponent } from '../../secondorycomponent/contactform/contactform.component';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink,FormsModule,ContactformComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent  {
  
}
 

