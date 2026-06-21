import {
  ChangeDetectionStrategy,
  Component,
  PLATFORM_ID,
  afterNextRender,
  inject,
  input,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-typing-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span class="gradient-text font-semibold">{{ displayText() }}</span>@if (animating()) {<span class="animate-blink text-[var(--color-accent-primary)]">|</span>}
  `,
})
export class TypingTextComponent {
  private readonly platformId = inject(PLATFORM_ID);
  readonly words = input.required<string[]>();
  readonly typingSpeed = input(80);
  readonly deletingSpeed = input(40);
  readonly pauseMs = input(2000);

  protected readonly displayText = signal('');
  protected readonly animating = signal(true);

  private wordIndex = 0;
  private charIndex = 0;
  private deleting = false;
  private timer: ReturnType<typeof setTimeout> | null = null;

  constructor() {
    afterNextRender(() => {
      const words = this.words();
      if (words.length === 0) {
        return;
      }

      if (
        !isPlatformBrowser(this.platformId) ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ) {
        this.displayText.set(words[0]);
        this.animating.set(false);
        return;
      }

      this.tick();
    });
  }

  private tick(): void {
    const words = this.words();
    const current = words[this.wordIndex] ?? '';

    if (!this.deleting) {
      this.charIndex++;
      this.displayText.set(current.slice(0, this.charIndex));

      if (this.charIndex === current.length) {
        this.deleting = true;
        this.timer = setTimeout(() => this.tick(), this.pauseMs());
        return;
      }
      this.timer = setTimeout(() => this.tick(), this.typingSpeed());
    } else {
      this.charIndex--;
      this.displayText.set(current.slice(0, this.charIndex));

      if (this.charIndex === 0) {
        this.deleting = false;
        this.wordIndex = (this.wordIndex + 1) % words.length;
        this.timer = setTimeout(() => this.tick(), 300);
        return;
      }
      this.timer = setTimeout(() => this.tick(), this.deletingSpeed());
    }
  }
}
