import {
  Directive,
  ElementRef,
  PLATFORM_ID,
  afterNextRender,
  inject,
  input,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appRevealOnScroll]',
})
export class RevealOnScrollDirective {
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);
  readonly revealDelay = input(0, { alias: 'appRevealOnScrollDelay' });

  constructor() {
    afterNextRender(() => {
      const element = this.el.nativeElement;
      const delay = this.revealDelay();

      if (!isPlatformBrowser(this.platformId)) {
        element.classList.add('reveal-visible');
        return;
      }

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        element.classList.add('reveal-visible');
        return;
      }

      element.classList.add('reveal-hidden');
      if (delay > 0) {
        element.style.transitionDelay = `${delay}ms`;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            element.classList.add('reveal-visible');
            element.classList.remove('reveal-hidden');
            observer.disconnect();
          }
        },
        { threshold: 0.08, rootMargin: '0px 0px -32px 0px' },
      );

      observer.observe(element);
    });
  }
}
