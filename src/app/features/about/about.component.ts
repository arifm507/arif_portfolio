import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { TechBadgeComponent } from '../../shared/components/tech-badge/tech-badge.component';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { ScrollSpyService } from '../../core/services/scroll-spy.service';
import { PROFILE } from '../../data/profile.data';
import { EXPERIENCES } from '../../data/experience.data';
import { SKILL_CATEGORIES } from '../../data/skills.data';
import { SECTION_IDS } from '../../core/constants/app.constants';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section [id]="sections.about" class="section-padding w-full bg-[var(--color-bg-secondary)]">
      <div class="section-container">
        <app-section-header
          eyebrow="About Me"
          title="Who I Am"
          subtitle="Passionate full-stack engineer with 6+ years building enterprise and government solutions."
        />

        <div class="grid gap-8 lg:grid-cols-5">
          <div class="lg:col-span-3" appRevealOnScroll>
            <div class="glass glass-hover rounded-2xl p-8">
              <h3 class="mb-4 text-lg font-semibold">Professional Summary</h3>
              <p class="leading-relaxed text-[var(--color-text-muted)]">{{ profile.careerObjective }}</p>
              <div class="mt-6 flex flex-wrap gap-2">
                @for (hobby of profile.hobbies; track hobby) {
                  <span class="rounded-full bg-[var(--color-card-hover)] px-3 py-1 text-xs text-[var(--color-text-muted)]">{{ hobby }}</span>
                }
              </div>
            </div>
          </div>

          <div class="lg:col-span-2 space-y-4" appRevealOnScroll>
            @for (stat of profile.stats; track stat.label) {
              <div class="glass glass-hover rounded-xl p-5 text-center">
                <p class="text-3xl font-bold gradient-text">{{ stat.value }}</p>
                <p class="mt-1 text-sm text-[var(--color-text-muted)]">{{ stat.label }}</p>
              </div>
            }
          </div>
        </div>

        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          @for (highlight of profile.highlights; track highlight.title; let i = $index) {
            <div class="glass glass-hover rounded-xl p-6" appRevealOnScroll [appRevealOnScrollDelay]="i * 80">
              <div class="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-card-hover)]">
                @switch (highlight.icon) {
                  @case ('briefcase') {
                    <svg class="h-5 w-5 text-[var(--color-accent-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
                  }
                  @case ('trophy') {
                    <svg class="h-5 w-5 text-[var(--color-accent-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
                  }
                  @case ('users') {
                    <svg class="h-5 w-5 text-[var(--color-accent-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  }
                  @default {
                    <svg class="h-5 w-5 text-[var(--color-accent-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/></svg>
                  }
                }
              </div>
              <h4 class="font-semibold">{{ highlight.title }}</h4>
              <p class="mt-2 text-sm text-[var(--color-text-muted)]">{{ highlight.description }}</p>
            </div>
          }
        </div>

        <div class="mt-12" appRevealOnScroll>
          <h3 class="mb-4 text-lg font-semibold">Core Technologies</h3>
          <div class="flex flex-wrap gap-2">
            @for (skill of topSkills; track skill) {
              <app-tech-badge [label]="skill" />
            }
          </div>
        </div>

        <div class="mt-12" appRevealOnScroll>
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-lg font-semibold">Career Snapshot</h3>
            <button type="button" (click)="scrollTo(sections.experience)" class="text-sm text-[var(--color-accent-primary)] hover:underline">
              View full experience →
            </button>
          </div>
          <div class="grid gap-4 md:grid-cols-3">
            @for (exp of experiences; track exp.id) {
              <div class="glass glass-hover rounded-xl p-5">
                <p class="font-medium">{{ exp.role }}</p>
                <p class="text-sm text-[var(--color-accent-primary)]">{{ exp.company }}</p>
                <p class="mt-1 text-xs text-[var(--color-text-muted)]">{{ exp.period }}</p>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  imports: [SectionHeaderComponent, TechBadgeComponent, RevealOnScrollDirective],
})
export class AboutComponent {
  private readonly scrollSpy = inject(ScrollSpyService);
  protected readonly profile = PROFILE;
  protected readonly experiences = EXPERIENCES;
  protected readonly sections = SECTION_IDS;
  protected readonly topSkills = SKILL_CATEGORIES.flatMap((c) => c.skills.slice(0, 2).map((s) => s.name)).slice(0, 8);

  scrollTo(sectionId: string): void {
    this.scrollSpy.smoothScrollTo(sectionId as typeof SECTION_IDS.hero);
  }
}
