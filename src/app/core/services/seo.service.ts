import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { PageMeta, PersonSchema } from '../../models/seo.model';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  setPageMeta(config: PageMeta): void {
    this.title.setTitle(config.title);

    this.updateTag('name', 'description', config.description);
    this.updateTag('name', 'keywords', config.keywords);
    this.updateTag('name', 'author', config.author);

    this.updateTag('property', 'og:title', config.ogTitle);
    this.updateTag('property', 'og:description', config.ogDescription);
    this.updateTag('property', 'og:image', config.ogImage);
    this.updateTag('property', 'og:type', 'website');

    if (config.ogUrl) {
      this.updateTag('property', 'og:url', config.ogUrl);
      this.setCanonicalLink(config.ogUrl);
    }

    this.updateTag('name', 'twitter:card', config.twitterCard ?? 'summary_large_image');
    this.updateTag('name', 'twitter:title', config.ogTitle);
    this.updateTag('name', 'twitter:description', config.ogDescription);
    this.updateTag('name', 'twitter:image', config.ogImage);
  }

  setPersonSchema(person: PersonSchema): void {
    const scriptId = 'portfolio-person-schema';
    const existing = this.document.getElementById(scriptId);
    existing?.remove();

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: person.name,
      jobTitle: person.jobTitle,
      email: person.email,
      image: person.image,
      address: {
        '@type': 'PostalAddress',
        addressLocality: person.addressLocality,
      },
      sameAs: person.sameAs.filter((url) => url && url !== '#'),
    };

    const script = this.document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    this.document.head.appendChild(script);
  }

  private setCanonicalLink(url: string): void {
    const linkId = 'portfolio-canonical';
    const existing = this.document.getElementById(linkId) as HTMLLinkElement | null;

    if (existing) {
      existing.href = url;
      return;
    }

    const link = this.document.createElement('link');
    link.id = linkId;
    link.rel = 'canonical';
    link.href = url;
    this.document.head.appendChild(link);
  }

  private updateTag(attrSelector: 'name' | 'property', attr: string, content: string): void {
    const selector = `${attrSelector}="${attr}"`;
    const tag = this.meta.getTag(selector);

    if (tag) {
      this.meta.updateTag({ [attrSelector]: attr, content });
    } else {
      this.meta.addTag({ [attrSelector]: attr, content });
    }
  }
}
