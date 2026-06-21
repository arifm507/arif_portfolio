import { Injectable, signal } from '@angular/core';

export type ToastType = 'success' | 'error';

@Injectable({ providedIn: 'root' })
export class ToastService {
  readonly message = signal('');
  readonly type = signal<ToastType>('success');
  readonly visible = signal(false);

  private hideTimeout: ReturnType<typeof setTimeout> | null = null;

  show(message: string, type: ToastType = 'success', durationMs = 4000): void {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
    }

    this.message.set(message);
    this.type.set(type);
    this.visible.set(true);

    this.hideTimeout = setTimeout(() => this.hide(), durationMs);
  }

  hide(): void {
    this.visible.set(false);
  }
}
