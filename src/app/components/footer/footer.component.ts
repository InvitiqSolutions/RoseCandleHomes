import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GalleryItem } from '../service/service.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
    constructor(private http: HttpClient) {}
    ngOnInit() {
        this.http.get<GalleryItem[]>('gallery.json').subscribe({
            next: (data) => {
    
            this.categories = [ ...new Set(data.map((x) => x.category))];
    
            },
    
            error: (err) => {
            console.error('Failed to load gallery.json', err);
            },
        });
    }

    categories: string[] = [];
    
    scrollToTop(): void {

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    }
}
