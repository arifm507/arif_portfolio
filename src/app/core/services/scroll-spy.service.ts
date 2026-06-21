import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NAV_LINKS, SectionId } from '../constants/app.constants';

@Injectable({ providedIn: 'root' })
export class ScrollSpyService {
  private readonly platformId = inject(PLATFORM_ID);
  private observer: IntersectionObserver | null = null;

  readonly activeSection = signal<SectionId>('hero');
  readonly isScrolled = signal(false);

  init(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.setupScrollListener();
    this.setupIntersectionObserver();
  }

  destroy(): void {
    this.observer?.disconnect();
    this.observer = null;
  }

  smoothScrollTo(sectionId: SectionId): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const element = document.getElementById(sectionId);
    if (!element) {
      return;
    }

    const navHeight = 64;
    const top = element.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: 'smooth' });
    this.activeSection.set(sectionId);
  }

  scrollToTop(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.activeSection.set('hero');
  }

  private setupScrollListener(): void {
    window.addEventListener('scroll', () => {
      this.isScrolled.set(window.scrollY > 20);
    }, { passive: true });
  }

  private setupIntersectionObserver(): void {
    const sectionIds = NAV_LINKS.map((link) => link.sectionId);

    this.observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          this.activeSection.set(visible[0].target.id as SectionId);
        }
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    for (const id of sectionIds) {
      const element = document.getElementById(id);
      if (element) {
        this.observer.observe(element);
      }
    }
  }
}
