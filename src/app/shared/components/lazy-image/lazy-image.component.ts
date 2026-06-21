import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  afterNextRender,
  input,
  signal,
  viewChild,
} from '@angular/core';

@Component({
  selector: 'app-lazy-image',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="relative overflow-hidden" [class]="wrapperClass()">
      @if (!loaded() && !errored()) {
        <div
          class="animate-shimmer absolute inset-0 bg-[var(--color-surface-glass)]"
          aria-hidden="true"
        ></div>
      }
      @if (errored()) {
        <div
          class="absolute inset-0 flex items-center justify-center bg-[var(--color-surface-glass)] text-xs text-[var(--color-text-muted)]"
        >
          Image unavailable
        </div>
      } @else {
        <img
          #imgEl
          [src]="src()"
          [alt]="alt()"
          [width]="width()"
          [height]="height()"
          [loading]="priority() ? 'eager' : 'lazy'"
          [attr.fetchpriority]="priority() ? 'high' : 'auto'"
          decoding="async"
          (load)="onLoad()"
          (error)="onError()"
          class="transition-opacity duration-500"
          [class]="imgClass()"
          [class.opacity-0]="!loaded()"
          [class.opacity-100]="loaded()"
        />
      }
    </div>
  `,
})
export class LazyImageComponent {
  private readonly imgEl = viewChild<ElementRef<HTMLImageElement>>('imgEl');

  readonly src = input.required<string>();
  readonly alt = input.required<string>();
  readonly width = input<number>();
  readonly height = input<number>();
  readonly priority = input(false);
  readonly wrapperClass = input('h-full w-full');
  readonly imgClass = input('h-full w-full object-cover');

  protected readonly loaded = signal(false);
  protected readonly errored = signal(false);

  constructor() {
    afterNextRender(() => {
      const img = this.imgEl()?.nativeElement;
      if (img?.complete && img.naturalWidth > 0) {
        this.onLoad();
      }
    });
  }

  onLoad(): void {
    this.loaded.set(true);
  }

  onError(): void {
    this.errored.set(true);
  }
}
