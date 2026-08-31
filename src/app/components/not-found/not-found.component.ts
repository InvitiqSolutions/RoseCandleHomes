import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../../shared/service/seo.service';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css',
})
export class NotFoundComponent {
  constructor(private seo: SeoService) {}
  ngOnInit() {
    this.seo.updateSeo({
      title: '404 - Page Not Found | Rose Candle Homes',

      description:
        'The page you are looking for could not be found. Explore our luxury construction projects and services.',

      keywords: '404',

      image: 'https://rosecandlehomes.com/images/seo/home.jpg',

      url: 'https://rosecandlehomes.com/404',

      canonical: 'https://rosecandlehomes.com/404',
    });
  }
}
