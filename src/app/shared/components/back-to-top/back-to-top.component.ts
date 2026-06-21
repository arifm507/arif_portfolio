import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
  PLATFORM_ID,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ScrollSpyService } from '../../../core/services/scroll-spy.service';

@Component({
  selector: 'app-back-to-top',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (visible()) {
      <button
        type="button"
        (click)="scrollToTop()"
        aria-label="Back to top"
        class="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--color-border-glass)] bg-[var(--color-surface-glass)] text-[var(--color-text-primary)] shadow-lg backdrop-blur-md transition-all duration-300 hover:border-[var(--color-accent-primary)] hover:bg-[var(--color-card-hover)] hover:-translate-y-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>
    }
  `,
})
export class BackToTopComponent implements OnInit, OnDestroy {
  private readonly scrollSpy = inject(ScrollSpyService);
  private readonly platformId = inject(PLATFORM_ID);
  protected readonly visible = signal(false);

  private scrollHandler = (): void => {
    this.visible.set(window.scrollY > 400);
  };

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    window.addEventListener('scroll', this.scrollHandler, { passive: true });
    this.scrollHandler();
  }

  ngOnDestroy(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    window.removeEventListener('scroll', this.scrollHandler);
  }

  scrollToTop(): void {
    this.scrollSpy.scrollToTop();
  }
}
