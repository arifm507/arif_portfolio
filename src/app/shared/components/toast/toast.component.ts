import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-toast',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (toast.visible()) {
      <div
        class="fixed bottom-6 left-1/2 z-[100] flex -translate-x-1/2 items-center gap-3 rounded-xl border px-5 py-3 shadow-lg backdrop-blur-md transition-all duration-300"
        [class.border-emerald-500/30]="toast.type() === 'success'"
        [class.bg-emerald-500/10]="toast.type() === 'success'"
        [class.border-red-500/30]="toast.type() === 'error'"
        [class.bg-red-500/10]="toast.type() === 'error'"
        role="status"
        aria-live="polite"
      >
        @if (toast.type() === 'success') {
          <svg class="h-5 w-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        } @else {
          <svg class="h-5 w-5 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
          </svg>
        }
        <span class="text-sm font-medium text-[var(--color-text-primary)]">{{ toast.message() }}</span>
        <button
          type="button"
          (click)="toast.hide()"
          class="ml-2 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
          aria-label="Dismiss notification"
        >
          <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    }
  `,
})
export class ToastComponent {
  protected readonly toast = inject(ToastService);
}
