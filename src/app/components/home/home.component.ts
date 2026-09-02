import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../../shared/service/seo.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private seo: SeoService) {}

  ngOnInit() {
    this.seo.updateSeo({
      title: 'Luxury Home Builders in Chennai | Rose Candle Homes',

      description:
        'Rose Candle Homes is a trusted construction company in Chennai specializing in luxury villas, residential homes, commercial buildings, interior design, and renovation with premium craftsmanship.',

      keywords:
        'Construction Company Chennai, Luxury Home Builders Chennai, Villa Construction, Residential Construction, Commercial Construction, Interior Design Chennai, Home Renovation, Turnkey Projects',

      image: 'https://rosecandlehomes.com/images/seo/home.jpg',

      url: 'https://rosecandlehomes.com',

      canonical: 'https://rosecandlehomes.com',
    });

    this.displayTestimonials = [
        ...this.testimonials,
        ...this.testimonials
    ];
  }

  displayTestimonials: any[] = [];
  statistics = [
    {
      value: '15+',
      title: 'Years Experience',
      description: 'Delivering quality construction with excellence.',
    },
    {
      value: '900+',
      title: 'Happy Clients',
      description:
        'Building lasting relationships through quality work and customer satisfaction.',
    },
    {
      value: '50+',
      title: 'Expert Professionals',
      description: 'Skilled engineers, architects and designers.',
    },
    {
      value: '98%',
      title: 'Client Satisfaction',
      description: 'Built on trust, transparency and lasting relationships.',
    },
  ];

  testimonials = [
    {
      name: 'Akhil Menon',
      designation: 'Home Owner',
      ratings: 5,
      review:
        'Mr Shejimon, Mr Rafeeq and the team did a immaculate and a very beautiful job in our balcony in the committed time, with utmost quality and within the budget we were looking for.',
      link:'https://share.google/zGQUMiavxcy8EjwCi'
    },
    {
      name: 'venkat c',
      designation: 'Home Owner',
      ratings: 5,
      review:
        'I absolutely loved the work. I would definitely recommend RoseCandle Homes to anyone. They are very professional and made the entire experience amazing.',
      link: 'https://share.google/E8Pdty0eqfyModoTv'
    },
    {
      name: 'Parag Turkar',
      designation: 'Home Owner',
      ratings: 5,
      review: 'The team did an excellent job, they carefully understood all our requirements, executed the work with great precision, and completed the entire installation within just two days. The quality of workmanship and professionalism was truly impressive. Highly recommended!',
      link: 'https://share.google/7iSvV7RpHTFFa2xR3'
    },
    {
      name: 'Hemant Yadav',
      designation: 'Home Owner',
      ratings: 5,
      review: 'I wholeheartedly recommend Rosecandle Homes Ventures Pvt. Ltd. to anyone in need of top-tier design services, especially when time is of the essence. We are grateful for their efforts in making our house feel like a dream home. Thank you for a job well done!',
      link: 'https://share.google/n7kkoAgP6MwI7nHng'
    },
    {
      name: 'Viknesh Sankaran',
      designation: 'Home Owner',
      ratings: 5,
      review: 'Absolutely thrilled with the amazing work done by Rose candle homes!! They transformed our space beautifully, paying attention to every detail. Highly professional, creative, and easy to work with. Highly recommended!',
      link: 'https://share.google/TKVHBKQe7Gw4pYjUl'
    },
    {
      name: 'Saket Verma',
      designation: 'Home Owner',
      ratings: 5,
      review: 'Marvellous, totally professional and great work. Shejimon sir and team has done a fantastic work for my parking and porch. More over they listen to their customers plus help with innovative ideas and suggestions. End of the day I am a damn happy customer. Sheiji sir and his team deserves a 5 star.',
      link: 'https://share.google/84hhpH3liExlt4QPe'
    },
    {
      name: 'Hareesh N K',
      designation: 'Home Owner',
      ratings: 5,
      review: 'They are very much professional in their work. They completed the work on committed time and did a good work. I will strongly recommend them for any house hold related work.',
      link: 'https://share.google/PvWtHDJHSAxKFU9LC'
    },
    {
      name: 'P Ravindran',
      designation: 'Home Owner',
      ratings: 5,
      review: 'These people have done an incredible work.From planning to execution,in a very professional manner and very responsive to all my queries in between.Quality of work is very good and a good value for my hard earned money.',
      link: 'https://share.google/SBC3lLtCcYetd4mhS'
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
