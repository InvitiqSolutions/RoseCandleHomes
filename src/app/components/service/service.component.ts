import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import GLightbox from 'glightbox';
import { SeoService } from '../../../shared/service/seo.service';

export interface GalleryItem {
  image: string;

  category: string;

  title: string;

  location?: string;
}

@Component({
  selector: 'app-service',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css',
})
export class ServiceComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private seo: SeoService,
  ) {}

  categories = ['All', 'Residential', 'Commercial', 'Interior', 'Renovation'];

  selectedCategory = 'All';

  projects: GalleryItem[] = [];

  filteredProjects: GalleryItem[] = [];

  visibleProjects: GalleryItem[] = [];

  pageSize = 12;

  lightbox: any;
  needsLightboxInit = false;
  ngAfterViewChecked(): void {
    // Re-initialize lightbox when flag is set
    if (this.needsLightboxInit && this.visibleProjects.length > 0) {
      this.needsLightboxInit = false;
      this.initializeLightbox();
    }
  }

  ngOnDestroy(): void {
    if (this.lightbox) {
      this.lightbox.destroy();
    }
  }

  private initializeLightbox(): void {
    // Destroy existing instance first
    if (this.lightbox) {
      this.lightbox.destroy();
      this.lightbox = null;
    }

    // Small delay to ensure DOM is fully rendered
    setTimeout(() => {
      this.lightbox = GLightbox({
        selector: '.gallery-lightbox',
        touchNavigation: true,
        loop: true,
        zoomable: true,
        draggable: true,
        openEffect: 'zoom',
        closeEffect: 'fade',
        slideEffect: 'slide',
      });
    }, 50);
  }

  ngOnInit(): void {
    this.seo.updateSeo({
      title: 'Construction Services | Rose Candle Homes',

      description:
        'Explore our residential construction, luxury villa construction, commercial buildings, interior design, renovation, and turnkey construction services.',

      keywords:
        'Residential Construction Bangalore, Commercial Construction Bangalore, Interior Design Bangalore, Home Renovation, Villa Builders Bangalore, Turnkey Construction',

      image: 'https://www.rosecandlehomes.com/images/seo/services.jpg',

      url: 'https://www.rosecandlehomes.com/service',

      canonical: 'https://www.rosecandlehomes.com/service',
    });

    this.http.get<GalleryItem[]>('gallery.json').subscribe({
      next: (data) => {
        this.projects = data;

        this.categories = ['All', ...new Set(data.map((x) => x.category))];

        this.filterGallery('All');

        setTimeout(() => {
          this.initializeLightbox();
        });
      },

      error: (err) => {
        console.error('Failed to load gallery.json', err);
      },
    });
  }

  filterGallery(category: string): void {
    this.selectedCategory = category;

    if (category === 'All') {
      this.filteredProjects = [...this.projects];
    } else {
      this.filteredProjects = this.projects.filter(
        (x) => x.category === category,
      );
    }

    this.visibleProjects = this.filteredProjects.slice(0, this.pageSize);

    // Set flag to re-initialize lightbox after view updates
    this.needsLightboxInit = true;
  }

  previousImageCount = 0;
  newItems = new Set<string>();
  trackByImage(index: number, item: GalleryItem): string {
    return item.image;
  }
  loadMore(): void {
    const current = this.visibleProjects.length;

    const newProjects = this.filteredProjects.slice(
      current,
      current + this.pageSize,
    );

    // Mark only the newly added projects
    newProjects.forEach((item) => {
      this.newItems.add(item.image);
    });

    this.visibleProjects = [...this.visibleProjects, ...newProjects];

    setTimeout(() => {
      this.initializeLightbox();
    });

    // Remove animation class after animation finishes
    setTimeout(() => {
      newProjects.forEach((item) => {
        this.newItems.delete(item.image);
      });
    }, 1000);
  }
  imageLoaded(event: Event): void {
    const image = event.target as HTMLImageElement;

    image.classList.add('loaded');
  }

  isVideoPlaying = false;

  playVideo(video: HTMLVideoElement): void {
    video.play();

    this.isVideoPlaying = true;
  }
  videoEnded(): void {

    this.isVideoPlaying = false;

}
}
