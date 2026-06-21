import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  PLATFORM_ID,
  afterNextRender,
  inject,
  input,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-progress-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div #barHost>
      <div class="mb-1.5 flex items-center justify-between text-sm">
        <span class="font-medium text-[var(--color-text-primary)]">{{ label() }}</span>
        <span class="text-[var(--color-text-muted)]">{{ value() }}%</span>
      </div>
      <div class="h-2 overflow-hidden rounded-full bg-[var(--color-surface-glass)]">
        <div
          class="h-full rounded-full bg-gradient-to-r from-[var(--color-gradient-from)] to-[var(--color-gradient-to)] transition-all duration-1000 ease-out"
          [style.width.%]="animated() ? value() : 0"
        ></div>
      </div>
    </div>
  `,
})
export class ProgressBarComponent {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly barHost = inject(ElementRef<HTMLElement>);
  readonly label = input.required<string>();
  readonly value = input.required<number>();

  protected readonly animated = signal(false);

  constructor() {
    afterNextRender(() => {
      if (!isPlatformBrowser(this.platformId)) {
        this.animated.set(true);
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.animated.set(true);
            observer.disconnect();
          }
        },
        { threshold: 0.3 },
      );
      observer.observe(this.barHost.nativeElement);
    });
  }
}
