import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { EXPERIENCES } from '../../data/experience.data';
import { SECTION_IDS } from '../../core/constants/app.constants';

@Component({
  selector: 'app-experience',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeaderComponent, RevealOnScrollDirective],
  template: `
    <section [id]="sections.experience" class="section-padding w-full">
      <div class="section-container">
        <app-section-header
          eyebrow="Experience"
          title="Professional Journey"
          subtitle="6+ years delivering enterprise and government solutions across India and the US."
        />

        <div class="relative mx-auto max-w-3xl">
          <div class="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-[var(--color-gradient-from)] via-[var(--color-accent-secondary)] to-transparent md:left-8 md:block"></div>

          <div class="space-y-8">
            @for (exp of experiences; track exp.id; let i = $index) {
              <article class="relative md:pl-20" appRevealOnScroll>
                <div class="absolute left-2.5 top-6 hidden h-4 w-4 rounded-full border-2 border-[var(--color-accent-primary)] bg-[var(--color-bg-primary)] md:left-7 md:block"></div>

                <div class="glass glass-hover relative rounded-2xl p-6 md:p-8 md:pl-8 border-l-2 border-[var(--color-accent-primary)] md:border-l-0">
                  <div class="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 class="text-lg font-semibold">{{ exp.role }}</h3>
                      <p class="text-[var(--color-accent-primary)]">{{ exp.company }}</p>
                      <p class="mt-1 text-sm text-[var(--color-text-muted)]">{{ exp.location }}</p>
                    </div>
                    <div class="text-right">
                      <span
                        class="inline-block rounded-full px-3 py-1 text-xs font-medium"
                        [class.bg-emerald-500/15]="exp.isCurrent"
                        [class.text-emerald-400]="exp.isCurrent"
                        [class.bg-[var(--color-card-hover)]]="!exp.isCurrent"
                        [class.text-[var(--color-text-muted)]]="!exp.isCurrent"
                      >
                        {{ exp.isCurrent ? 'Present' : exp.period }}
                      </span>
                      @if (exp.isCurrent) {
                        <p class="mt-1 text-xs text-[var(--color-text-muted)]">{{ exp.period }}</p>
                      }
                    </div>
                  </div>

                  <button
                    type="button"
                    (click)="toggle(i)"
                    class="mt-4 flex items-center gap-1 text-sm text-[var(--color-accent-primary)] hover:underline"
                  >
                    {{ expandedIndex() === i ? 'Hide details' : 'View details' }}
                    <svg
                      class="h-4 w-4 transition-transform"
                      [class.rotate-180]="expandedIndex() === i"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>

                  @if (expandedIndex() === i) {
                    <div class="mt-4 grid gap-6 md:grid-cols-2">
                      <div>
                        <h4 class="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">Responsibilities</h4>
                        <ul class="space-y-2">
                          @for (item of exp.responsibilities; track item) {
                            <li class="flex gap-2 text-sm text-[var(--color-text-muted)]">
                              <span class="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent-primary)]"></span>
                              {{ item }}
                            </li>
                          }
                        </ul>
                      </div>
                      <div>
                        <h4 class="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">Achievements</h4>
                        <ul class="space-y-2">
                          @for (item of exp.achievements; track item) {
                            <li class="flex gap-2 text-sm text-[var(--color-text-muted)]">
                              <span class="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent-secondary)]"></span>
                              {{ item }}
                            </li>
                          }
                        </ul>
                      </div>
                    </div>
                  }
                </div>
              </article>
            }
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ExperienceComponent {
  protected readonly experiences = EXPERIENCES;
  protected readonly sections = SECTION_IDS;
  protected readonly expandedIndex = signal<number | null>(0);

  toggle(index: number): void {
    this.expandedIndex.update((current) => (current === index ? null : index));
  }
}
