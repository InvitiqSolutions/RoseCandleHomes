import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isNavbarOpen = false;

  toggleNavbar(): void {

    this.isNavbarOpen = !this.isNavbarOpen;

  }

  closeNavbar(): void {

    this.isNavbarOpen = false;

  }

}