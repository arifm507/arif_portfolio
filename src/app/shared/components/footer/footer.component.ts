import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NAV_LINKS, SectionId } from '../../../core/constants/app.constants';
import { ScrollSpyService } from '../../../core/services/scroll-spy.service';
import { PROFILE } from '../../../data/profile.data';
import { isValidExternalLink } from '../../utils/link.util';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="border-t border-[var(--color-border-glass)] bg-[var(--color-bg-secondary)]">
      <div class="section-container section-padding !pb-8 !pt-12">
        <div class="grid gap-10 md:grid-cols-3">
          <!-- Brand -->
          <div>
            <p class="text-lg font-bold">
              <span class="gradient-text">{{ profile.fullName }}</span>
            </p>
            <p class="mt-2 text-sm text-[var(--color-text-muted)]">{{ profile.title }}</p>
            <p class="mt-4 text-sm text-[var(--color-text-muted)]">{{ profile.tagline }}</p>
          </div>

          <!-- Quick links -->
          <div>
            <h3 class="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--color-text-primary)]">
              Quick Links
            </h3>
            <ul class="flex flex-col gap-2">
              @for (link of navLinks; track link.sectionId) {
                <li>
                  <button
                    type="button"
                    (click)="navigate(link.sectionId)"
                    class="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent-primary)]"
                  >
                    {{ link.label }}
                  </button>
                </li>
              }
            </ul>
          </div>

          <!-- Social & contact -->
          <div>
            <h3 class="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--color-text-primary)]">
              Connect
            </h3>
            <ul class="flex flex-col gap-2">
              <li>
                <a
                  [href]="'mailto:' + profile.email"
                  class="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent-primary)]"
                >
                  {{ profile.email }}
                </a>
              </li>
              <li>
                <span class="text-sm text-[var(--color-text-muted)]">{{ profile.phone }}</span>
              </li>
              <li>
                <span class="text-sm text-[var(--color-text-muted)]">{{ profile.location }}</span>
              </li>
            </ul>
            <div class="mt-4 flex gap-3">
              @for (social of profile.socialLinks; track social.label) {
                @if (isValidLink(social.url)) {
                  <a
                    [href]="social.url"
                    [attr.aria-label]="social.label"
                    class="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-border-glass)] bg-[var(--color-surface-glass)] text-[var(--color-text-muted)] transition-all hover:border-[var(--color-accent-primary)] hover:text-[var(--color-accent-primary)]"
                  >
                  @switch (social.icon) {
                    @case ('github') {
                      <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                    }
                    @case ('linkedin') {
                      <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    }
                    @case ('email') {
                      <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                        <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                      </svg>
                    }
                    @case ('location') {
                      <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                      </svg>
                    }
                  }
                </a>
                } @else {
                  <span
                    class="flex h-9 w-9 cursor-not-allowed items-center justify-center rounded-lg border border-[var(--color-border-glass)] bg-[var(--color-surface-glass)] text-[var(--color-text-muted)] opacity-50"
                    [attr.aria-label]="social.label + ' (coming soon)'"
                    title="Coming soon"
                  >
                    @switch (social.icon) {
                      @case ('github') {
                        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                        </svg>
                      }
                      @case ('linkedin') {
                        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      }
                      @default {
                        <span class="text-xs">—</span>
                      }
                    }
                  </span>
                }
              }
            </div>
          </div>
        </div>

        <div class="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-border-glass)] pt-8 sm:flex-row">
          <p class="text-sm text-[var(--color-text-muted)]">
            &copy; {{ year }} {{ profile.fullName }}. All rights reserved.
          </p>
          <p class="text-sm text-[var(--color-text-muted)]">
            Built with Angular 21 & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  private readonly scrollSpy = inject(ScrollSpyService);
  protected readonly profile = PROFILE;
  protected readonly navLinks = NAV_LINKS;
  protected readonly year = new Date().getFullYear();
  protected readonly isValidLink = isValidExternalLink;

  navigate(sectionId: SectionId): void {
    this.scrollSpy.smoothScrollTo(sectionId);
  }
}
