import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-tech-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span
      class="inline-flex items-center rounded-full border border-[var(--color-border-glass)] bg-[var(--color-surface-glass)] px-2.5 py-0.5 text-xs font-medium text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-accent-primary)] hover:text-[var(--color-accent-primary)]"
    >
      {{ label() }}
    </span>
  `,
})
export class TechBadgeComponent {
  readonly label = input.required<string>();
}
