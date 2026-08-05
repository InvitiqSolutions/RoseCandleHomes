import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../../shared/service/seo.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private seo: SeoService) {}

  ngOnInit(){
    this.seo.updateSeo({

      title:
      'Luxury Home Builders in Chennai | Rose Candle Homes',

      description:
      'Rose Candle Homes is a trusted construction company in Chennai specializing in luxury villas, residential homes, commercial buildings, interior design, and renovation with premium craftsmanship.',

      keywords:
      'Construction Company Chennai, Luxury Home Builders Chennai, Villa Construction, Residential Construction, Commercial Construction, Interior Design Chennai, Home Renovation, Turnkey Projects',

      image:
      'https://rosecandlehomes.com/images/seo/home.jpg',

      url:
      'https://rosecandlehomes.com',

      canonical:
      'https://rosecandlehomes.com'

  });
  }

  statistics = [
  {
    value: '15+',
    title: 'Years Experience',
    description: 'Delivering quality construction with excellence.'
  },
  {
    value: '250+',
    title: 'Projects Completed',
    description: 'Successfully completed residential and commercial projects.'
  },
  {
    value: '50+',
    title: 'Expert Professionals',
    description: 'Skilled engineers, architects and designers.'
  },
  {
    value: '98%',
    title: 'Client Satisfaction',
    description: 'Built on trust, transparency and lasting relationships.'
  }
];

testimonials = [
  {
    name: 'Rahul Sharma',
    designation: 'Luxury Villa Owner',
    review: 'BuildCraft transformed our dream home into reality. The quality and attention to detail exceeded our expectations.'
  },
  {
    name: 'Priya Nair',
    designation: 'Home Owner',
    review: 'Professional team, timely delivery and outstanding craftsmanship.'
  },
  {
    name: 'Arun Kumar',
    designation: 'Commercial Client',
    review: 'Excellent project management from planning to completion.'
  },
  {
    name: 'Vignesh',
    designation: 'Villa Owner',
    review: 'The team delivered a premium finish with exceptional support.'
  },
  {
    name: 'Karthik',
    designation: 'Apartment Owner',
    review: 'Modern designs and excellent customer support.'
  },
  {
    name: 'Suresh',
    designation: 'Business Owner',
    review: 'One of the best construction companies we have worked with.'
  }
];

currentIndex = 0;



get visibleCards(): number {

  if (window.innerWidth < 768) return 1;

  if (window.innerWidth < 992) return 2;

  return 3;

}

get translatePercentage(): number {

  return 100 / this.visibleCards;

}

next() {

  if (this.currentIndex < this.testimonials.length - this.visibleCards) {

    this.currentIndex++;

  }

}

previous() {

  if (this.currentIndex > 0) {

    this.currentIndex--;

  }

}

}
