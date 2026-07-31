import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component, ElementRef, ViewChild } from '@angular/core';
import Collapse from 'bootstrap/js/dist/collapse';
@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @ViewChild('navbarCollapse')
  navbarCollapse!: ElementRef;

  closeNavbar(): void {

    if (window.innerWidth >= 992) {
      return;
    }

    const collapse =
      Collapse.getInstance(this.navbarCollapse.nativeElement) ||
      new Collapse(this.navbarCollapse.nativeElement, {
        toggle: false
      });

    collapse.hide();

  }
}
