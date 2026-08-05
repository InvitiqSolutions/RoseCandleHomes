import { Component } from '@angular/core';
import { SeoService } from '../../../shared/service/seo.service';

@Component({
  selector: 'app-contact',
  imports: [],
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
}
