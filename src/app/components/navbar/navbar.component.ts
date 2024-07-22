import { Component,AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements AfterViewInit {
  private offcanvas: any;
  dropdownOpen = false; // Track dropdown state

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    const offcanvasElement = document.getElementById('offcanvasNavbar');
    if (offcanvasElement) {
      this.offcanvas = new (window as any).bootstrap.Offcanvas(offcanvasElement);
    }
  }

  navigateAndCloseOffcanvas(route: string): void {
    if (this.offcanvas) {
      this.offcanvas.hide();
    }
    setTimeout(() => {
      this.router.navigate([route]);
      this.removeBackdrop();
    }, 300); // Adjust the timeout to ensure the offcanvas is fully closed before navigation
  }

  toggleDropdown(event: MouseEvent): void {
    event.preventDefault(); // Prevent default link behavior
    const dropdownMenu = (event.target as HTMLElement).nextElementSibling as HTMLElement;
    if (dropdownMenu) {
      if (this.dropdownOpen) {
        dropdownMenu.classList.remove('show');
      } else {
        dropdownMenu.classList.add('show');
      }
      this.dropdownOpen = !this.dropdownOpen; // Toggle state
    }
  }

  private removeBackdrop(): void {
    const backdrops = document.getElementsByClassName('offcanvas-backdrop');
    while (backdrops.length > 0) {
      backdrops[0].parentNode?.removeChild(backdrops[0]);
    }
  }
}
