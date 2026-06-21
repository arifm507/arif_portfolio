import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="mb-12 text-center">
      @if (eyebrow()) {
        <p class="mb-3 text-sm font-medium uppercase tracking-widest text-[var(--color-accent-primary)]">
          {{ eyebrow() }}
        </p>
      }
      <h2 class="text-3xl font-bold tracking-tight md:text-4xl">
        {{ title() }}
      </h2>
      @if (subtitle()) {
        <p class="mx-auto mt-4 max-w-2xl text-[var(--color-text-muted)]">
          {{ subtitle() }}
        </p>
      }
    </div>
  `,
})
export class SectionHeaderComponent {
  readonly eyebrow = input<string>('');
  readonly title = input.required<string>();
  readonly subtitle = input<string>('');
}
