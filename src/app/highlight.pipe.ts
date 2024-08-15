import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Pipe({
  name: 'highlight',
  standalone: true
})
export class HighlightPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string, searchTerm: string): SafeHtml {
    if (!searchTerm) { return value; }
    const re = new RegExp(searchTerm, 'gi'); // case insensitive
    const highlighted = value.replace(re, "<mark>$&</mark>");
    return this.sanitizer.bypassSecurityTrustHtml(highlighted);
  }

}
