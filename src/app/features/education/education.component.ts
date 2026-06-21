import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { CERTIFICATIONS, EDUCATION, EXTRA_CURRICULAR } from '../../data/education.data';
import { SECTION_IDS } from '../../core/constants/app.constants';

@Component({
  selector: 'app-education',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeaderComponent, RevealOnScrollDirective],
  template: `
    <section [id]="sections.education" class="section-padding w-full bg-[var(--color-bg-secondary)]">
      <div class="section-container">
        <app-section-header
          eyebrow="Education"
          title="Academic Background"
          subtitle="Formal education, professional trainings, and achievements."
        />

        <div class="grid gap-6 md:grid-cols-3">
          @for (item of education; track item.id) {
            <div class="glass glass-hover relative overflow-hidden rounded-2xl p-6" appRevealOnScroll>
              <span class="absolute right-4 top-4 rounded-full bg-[var(--color-card-hover)] px-3 py-1 text-xs font-semibold text-[var(--color-accent-primary)]">
                {{ item.score }}
              </span>
              <p class="text-xs font-medium uppercase tracking-wider text-[var(--color-text-muted)]">{{ item.period }}</p>
              <h3 class="mt-2 pr-16 font-semibold leading-snug">{{ item.degree }}</h3>
              <p class="mt-2 text-sm text-[var(--color-text-muted)]">{{ item.institute }}</p>
              @if (item.description) {
                <p class="mt-2 text-xs text-[var(--color-text-muted)]">{{ item.description }}</p>
              }
            </div>
          }
        </div>

        <div class="mt-12 grid gap-8 lg:grid-cols-2">
          <div appRevealOnScroll>
            <h3 class="mb-4 text-lg font-semibold">Trainings & Workshops</h3>
            <div class="space-y-4">
              @for (cert of certifications; track cert.id) {
                <div class="glass rounded-xl p-5">
                  <p class="font-medium">{{ cert.title }}</p>
                  <p class="mt-1 text-sm text-[var(--color-text-muted)]">{{ cert.provider }}</p>
                </div>
              }
            </div>
          </div>

          <div appRevealOnScroll>
            <h3 class="mb-4 text-lg font-semibold">Extra-Curricular</h3>
            <ul class="space-y-3">
              @for (item of extraCurricular; track item) {
                <li class="glass flex gap-3 rounded-xl p-4 text-sm text-[var(--color-text-muted)]">
                  <svg class="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {{ item }}
                </li>
              }
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class EducationComponent {
  protected readonly education = EDUCATION;
  protected readonly certifications = CERTIFICATIONS;
  protected readonly extraCurricular = EXTRA_CURRICULAR;
  protected readonly sections = SECTION_IDS;
}
