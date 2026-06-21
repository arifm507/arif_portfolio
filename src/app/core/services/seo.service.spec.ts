import { TestBed } from '@angular/core/testing';
import { Meta, Title } from '@angular/platform-browser';
import { SeoService } from './seo.service';

describe('SeoService', () => {
  let service: SeoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeoService);
  });

  it('should set page title and meta tags', () => {
    const title = TestBed.inject(Title);
    const meta = TestBed.inject(Meta);

    service.setPageMeta({
      title: 'Test Title',
      description: 'Test description',
      keywords: 'test, portfolio',
      author: 'Mohammad Arif',
      ogTitle: 'OG Title',
      ogDescription: 'OG Description',
      ogImage: '/assets/images/profile.jpeg',
    });

    expect(title.getTitle()).toBe('Test Title');
    expect(meta.getTag('name="description"')?.content).toBe('Test description');
    expect(meta.getTag('property="og:title"')?.content).toBe('OG Title');
    expect(meta.getTag('name="twitter:card"')?.content).toBe('summary_large_image');
  });

  it('should inject person schema JSON-LD', () => {
    service.setPersonSchema({
      name: 'Mohammad Arif',
      jobTitle: 'Software Developer',
      email: 'arifm507@gmail.com',
      image: '/assets/images/profile.jpeg',
      addressLocality: 'Noida, India',
      sameAs: [],
    });

    const script = document.getElementById('portfolio-person-schema');
    expect(script).toBeTruthy();
    expect(script?.textContent).toContain('Mohammad Arif');
    expect(script?.textContent).toContain('Person');
  });
});
