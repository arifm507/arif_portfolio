import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { NAV_LINKS, SectionId } from '../../../core/constants/app.constants';
import { ScrollSpyService } from '../../../core/services/scroll-spy.service';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { PROFILE } from '../../../data/profile.data';

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ThemeToggleComponent],
  template: `
    <header
      class="fixed top-0 z-50 w-full transition-all duration-300"
      [class.border-b]="scrollSpy.isScrolled()"
      [class.border-[var(--color-border-glass)]]="scrollSpy.isScrolled()"
      [class.bg-[var(--color-navbar-bg)]]="scrollSpy.isScrolled()"
      [class.backdrop-blur-xl]="scrollSpy.isScrolled()"
      [class.shadow-lg]="scrollSpy.isScrolled()"
    >
      <nav class="section-container flex h-16 items-center justify-between" aria-label="Main navigation">
        <button
          type="button"
          (click)="navigate('hero')"
          class="text-lg font-bold tracking-tight transition-opacity hover:opacity-80"
        >
          <span class="gradient-text">{{ profile.firstName }}</span>
          <span class="ml-1 text-[var(--color-text-muted)]">{{ profile.lastName }}</span>
        </button>

        <!-- Desktop nav -->
        <div class="hidden items-center gap-1 lg:flex">
          @for (link of navLinks; track link.sectionId) {
            <button
              type="button"
              (click)="navigate(link.sectionId)"
              class="relative rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200"
              [class.text-[var(--color-accent-primary)]]="scrollSpy.activeSection() === link.sectionId"
              [class.text-[var(--color-text-muted)]]="scrollSpy.activeSection() !== link.sectionId"
              [class.hover:text-[var(--color-text-primary)]]="scrollSpy.activeSection() !== link.sectionId"
            >
              {{ link.label }}
              @if (scrollSpy.activeSection() === link.sectionId) {
                <span
                  class="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-[var(--color-gradient-from)] to-[var(--color-gradient-to)]"
                ></span>
              }
            </button>
          }
          <div class="ml-2">
            <app-theme-toggle />
          </div>
        </div>

        <!-- Mobile controls -->
        <div class="flex items-center gap-2 lg:hidden">
          <app-theme-toggle />
          <button
            type="button"
            (click)="toggleMenu()"
            class="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--color-border-glass)] bg-[var(--color-surface-glass)] text-[var(--color-text-primary)]"
            [attr.aria-expanded]="menuOpen()"
            aria-label="Toggle navigation menu"
          >
            @if (menuOpen()) {
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            } @else {
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            }
          </button>
        </div>
      </nav>

      <!-- Mobile menu -->
      @if (menuOpen()) {
        <div
          class="glass border-t border-[var(--color-border-glass)] lg:hidden"
          (click)="closeMenu()"
        >
          <div class="section-container flex flex-col gap-1 py-4" (click)="$event.stopPropagation()">
            @for (link of navLinks; track link.sectionId) {
              <button
                type="button"
                (click)="navigate(link.sectionId)"
                class="rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors"
                [class.bg-[var(--color-card-hover)]]="scrollSpy.activeSection() === link.sectionId"
                [class.text-[var(--color-accent-primary)]]="scrollSpy.activeSection() === link.sectionId"
                [class.text-[var(--color-text-muted)]]="scrollSpy.activeSection() !== link.sectionId"
              >
                {{ link.label }}
              </button>
            }
          </div>
        </div>
      }
    </header>

    @if (menuOpen()) {
      <div
        class="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
        (click)="closeMenu()"
        aria-hidden="true"
      ></div>
    }
  `,
})
export class NavbarComponent {
  protected readonly scrollSpy = inject(ScrollSpyService);
  protected readonly profile = PROFILE;
  protected readonly navLinks = NAV_LINKS;
  protected readonly menuOpen = signal(false);

  navigate(sectionId: SectionId): void {
    this.scrollSpy.smoothScrollTo(sectionId);
    this.closeMenu();
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
