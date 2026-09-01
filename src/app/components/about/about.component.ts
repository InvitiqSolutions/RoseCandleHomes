import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../../shared/service/seo.service';

@Component({
  selector: 'app-about',
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  constructor(private seo: SeoService) { }

  ngOnInit() {
    this.seo.updateSeo({
      title: 'About Us | Rose Candle Homes',

      description:
        'Learn about Rose Candle Homes, our experienced team, core values, quality standards, and commitment to delivering exceptional residential and commercial construction projects.',

      keywords:
        'About Rose Candle Homes, Construction Company Chennai, Building Contractors, Residential Builders, Commercial Builders',

      image: 'https://rosecandlehomes.com/images/seo/about.jpg',

      url: 'https://rosecandlehomes.com/about',

      canonical: 'https://rosecandlehomes.com/about',
    });
  }
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

  coreValues = [
    {
      icon: 'fas fa-hard-hat',
      title: 'Quality Craftsmanship',
      description:
        'Every project is built with precision, premium materials, and attention to detail.',
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Innovation',
      description:
        'We embrace modern technologies and creative construction solutions.',
    },
    {
      icon: 'fas fa-handshake',
      title: 'Integrity',
      description:
        'Trust, transparency, and honest communication are at the heart of every project.',
    },
    {
      icon: 'fas fa-clock',
      title: 'Timely Delivery',
      description: 'We respect deadlines and deliver projects on schedule.',
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Safety First',
      description:
        'Strict safety standards ensure a secure environment for everyone.',
    },
    {
      icon: 'fas fa-leaf',
      title: 'Sustainability',
      description:
        'We focus on environmentally responsible construction practices.',
    },
  ];

  constructionProcess = [
    {
      step: '01',
      icon: 'fas fa-comments',
      title: 'Consultation',
      description:
        'We begin by understanding your vision, goals, budget, and project requirements.',
    },
    {
      step: '02',
      icon: 'fas fa-drafting-compass',
      title: 'Planning & Design',
      description:
        'Our architects and engineers create detailed plans and construction strategies.',
    },
    {
      step: '03',
      icon: 'fas fa-hard-hat',
      title: 'Construction',
      description:
        'Our experienced team executes every stage with precision, quality, and safety.',
    },
    {
      step: '04',
      icon: 'fas fa-key',
      title: 'Project Handover',
      description:
        'After rigorous quality inspections, we hand over your completed project with confidence.',
    },
  ];

  faqs = [
    {
      question: 'Do you provide free consultations?',
      answer:
        'Yes. We offer an initial consultation to understand your requirements, discuss your vision, and provide expert guidance before starting your project.',
    },
    {
      question: 'What types of projects do you undertake?',
      answer:
        'We specialize in residential homes, villas, apartments, commercial buildings, renovations, interior fit-outs, and custom construction projects.',
    },
    {
      question: 'How long does a construction project take?',
      answer:
        'The timeline depends on the project scope and complexity. After evaluating your requirements, we provide a detailed schedule with realistic milestones.',
    },
    {
      question: 'Do you handle approvals and permits?',
      answer:
        'Yes. We assist clients with required approvals, permits, and documentation to ensure a smooth construction process.',
    },
    {
      question: 'Which locations do you serve?',
      answer:
        'We serve multiple cities and surrounding regions. Contact us to confirm availability for your project location.',
    },
    {
      question: 'Do you provide post-construction support?',
      answer:
        'Absolutely. We remain available for inspections, maintenance guidance, and support even after project completion.',
    },
  ];
}
