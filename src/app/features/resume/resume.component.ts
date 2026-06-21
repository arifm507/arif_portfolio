import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { PROFILE } from '../../data/profile.data';
import { SKILL_CATEGORIES } from '../../data/skills.data';
import { SECTION_IDS } from '../../core/constants/app.constants';

@Component({
  selector: 'app-resume',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeaderComponent, RevealOnScrollDirective],
  template: `
    <section [id]="sections.resume" class="section-padding w-full">
      <div class="section-container">
        <app-section-header
          eyebrow="Resume"
          title="Download CV"
          subtitle="Get a copy of my resume with full professional details."
        />

        <div class="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div class="glass mx-auto w-full max-w-lg rounded-2xl p-8 text-center lg:mx-0" appRevealOnScroll>
            <div class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-gradient-from)] to-[var(--color-gradient-to)]">
              <svg class="h-10 w-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold">{{ profile.fullName }}</h3>
            <p class="mt-1 text-[var(--color-text-muted)]">{{ profile.title }}</p>
            <p class="mt-4 text-sm text-[var(--color-text-muted)]">PDF · Mohammad Arif Resume</p>
            <a [href]="profile.resumeUrl" download class="btn-primary mt-6 inline-flex">
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>
              </svg>
              Download Resume
            </a>
          </div>

          <div class="grid grid-cols-2 gap-4" appRevealOnScroll>
            @for (stat of stats; track stat.label) {
              <div class="glass glass-hover rounded-xl p-6 text-center">
                <p class="text-4xl font-bold gradient-text">{{ stat.value }}</p>
                <p class="mt-2 text-sm text-[var(--color-text-muted)]">{{ stat.label }}</p>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ResumeComponent {
  protected readonly profile = PROFILE;
  protected readonly sections = SECTION_IDS;
  protected readonly stats = [
    ...PROFILE.stats,
    { label: 'Skill Categories', value: String(SKILL_CATEGORIES.length) },
  ];
}
