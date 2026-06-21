import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-glass-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block',
  },
  template: `
    <div
      class="glass rounded-2xl"
      [class.glass-hover]="hover()"
      [class]="paddingClass()"
    >
      <ng-content />
    </div>
  `,
})
export class GlassCardComponent {
  readonly hover = input(true);
  readonly padding = input<'sm' | 'md' | 'lg'>('md');

  paddingClass(): string {
    const map = { sm: 'p-4', md: 'p-6', lg: 'p-8' };
    return map[this.padding()];
  }
}
