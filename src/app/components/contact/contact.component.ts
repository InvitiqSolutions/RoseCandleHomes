import { Component } from '@angular/core';
import { SeoService } from '../../../shared/service/seo.service';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor(
      private seo: SeoService
  ){}
  ngOnInit(){
    this.seo.updateSeo({

    title:
    'Contact Rose Candle Homes',

    description:
    'Contact Rose Candle Homes for luxury home construction, commercial building projects, interior design, and renovation services in Bangalore.',

    keywords:
    'Contact Construction Company Bangalore, Building Contractors Bangalore, Luxury Home Builders Contact',

    image:
    'https://www.rosecandlehomes.com/images/seo/contact.jpg',

    url:
    'https://www.rosecandlehomes.com/contact',

    canonical:
    'https://www.rosecandlehomes.com/contact'

    });
  }


    contact = {
      name: '',
      email: '',
      phone: '',
      query: ''
    };


  submitContact(): void {
  if(!this.contact.name || !this.contact.email || !this.contact.phone || !this.contact.query) {
    alert('Please fill in all required fields.');
    return;
  }
  const formData = new URLSearchParams();

  formData.set('form-name', 'enquiry');
  formData.set('name', this.contact.name);
  formData.set('email', this.contact.email);
  formData.set('phone', this.contact.phone);
  formData.set('query', this.contact.query);

  fetch('/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: formData.toString()
  })
  .then(response => {
    debugger
    if (!response.ok) {
      throw new Error('Form submission failed');
    }

    alert('Thank you! Your enquiry has been sent successfully.');

    this.contact = {
      name: '',
      phone: '',
      email: '',
      query: ''
    };

  })
  .catch(error => {

    console.error(error);

    alert('Unable to send your enquiry. Please try again.');

  });

}

}
