import { Injectable } from '@angular/core';

import { Meta, Title } from '@angular/platform-browser';
import { SeoModel } from '../model/seo.model';

import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';

// import { SeoModel } from '../models/seo.model';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private document: Document
) {}

private updateCanonicalUrl(url: string): void {

    let link: HTMLLinkElement | null =
        this.document.querySelector("link[rel='canonical']");

    if (!link) {

        link = this.document.createElement('link');

        link.setAttribute('rel', 'canonical');

        this.document.head.appendChild(link);

    }

    link.setAttribute('href', url);

}

  updateSeo(data: SeoModel): void {

    this.title.setTitle(data.title);

    this.meta.updateTag({
      name: 'description',
      content: data.description
    });

    if (data.keywords) {

      this.meta.updateTag({
        name: 'keywords',
        content: data.keywords
      });

    }

    /* Open Graph */

    this.meta.updateTag({
      property: 'og:title',
      content: data.title
    });

    this.meta.updateTag({
      property: 'og:description',
      content: data.description
    });

    this.meta.updateTag({
      property: 'og:type',
      content: 'website'
    });

    if (data.image) {

      this.meta.updateTag({
        property: 'og:image',
        content: data.image
      });

    }

    if (data.url) {

      this.meta.updateTag({
        property: 'og:url',
        content: data.url
      });

    }

    /* Twitter */

    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image'
    });

    this.meta.updateTag({
      name: 'twitter:title',
      content: data.title
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content: data.description
    });

    if (data.image) {

      this.meta.updateTag({
        name: 'twitter:image',
        content: data.image
      });

    }

    if (data.canonical) {

      this.updateCanonicalUrl(data.canonical);

    }

  }

}