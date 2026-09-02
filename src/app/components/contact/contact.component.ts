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
    'Contact Rose Candle Homes for luxury home construction, commercial building projects, interior design, and renovation services in Chennai.',

    keywords:
    'Contact Construction Company Chennai, Building Contractors Chennai, Luxury Home Builders Contact',

    image:
    'https://rosecandlehomes.com/images/seo/contact.jpg',

    url:
    'https://rosecandlehomes.com/contact',

    canonical:
    'https://rosecandlehomes.com/contact'

    });
  }


    contact = {
      name: '',
      email: '',
      phone: '',
      query: ''
    };
  submitContact() {

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
    .then(() => {

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
