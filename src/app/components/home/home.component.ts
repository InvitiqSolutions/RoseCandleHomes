import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor() {}

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
