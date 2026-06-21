import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { ProgressBarComponent } from '../../shared/components/progress-bar/progress-bar.component';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { SKILL_CATEGORIES } from '../../data/skills.data';
import { SkillCategoryId } from '../../models/skill.model';
import { SECTION_IDS } from '../../core/constants/app.constants';

@Component({
  selector: 'app-skills',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeaderComponent, ProgressBarComponent, RevealOnScrollDirective],
  template: `
    <section [id]="sections.skills" class="section-padding w-full">
      <div class="section-container">
        <app-section-header
          eyebrow="Skills"
          title="Technical Expertise"
          subtitle="Proficiency across frontend, backend, databases, cloud, and tooling."
        />

        <div class="mb-8 flex flex-wrap justify-center gap-2" appRevealOnScroll>
          @for (category of categories; track category.id) {
            <button
              type="button"
              (click)="selectCategory(category.id)"
              class="rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200"
              [class.border-[var(--color-accent-primary)]]="activeCategory() === category.id"
              [class.bg-[var(--color-card-hover)]]="activeCategory() === category.id"
              [class.text-[var(--color-accent-primary)]]="activeCategory() === category.id"
              [class.border-[var(--color-border-glass)]]="activeCategory() !== category.id"
              [class.text-[var(--color-text-muted)]]="activeCategory() !== category.id"
            >
              {{ category.name }}
            </button>
          }
        </div>

        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          @for (category of categories; track category.id) {
            @if (activeCategory() === category.id) {
              <div
                class="glass glass-hover rounded-2xl p-6 sm:col-span-2 lg:col-span-3"
                appRevealOnScroll
              >
                <h3 class="mb-6 text-xl font-semibold">{{ category.name }}</h3>
                <div class="grid gap-5 sm:grid-cols-2">
                  @for (skill of category.skills; track skill.name) {
                    <app-progress-bar [label]="skill.name" [value]="skill.proficiency" />
                  }
                </div>
              </div>
            }
          }
        </div>

        <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          @for (category of categories; track category.id) {
            <button
              type="button"
              (click)="selectCategory(category.id)"
              class="glass glass-hover rounded-xl p-5 text-left transition-all"
              [class.ring-2]="activeCategory() === category.id"
              [class.ring-[var(--color-accent-primary)]]="activeCategory() === category.id"
              appRevealOnScroll
            >
              <p class="font-semibold">{{ category.name }}</p>
              <p class="mt-1 text-sm text-[var(--color-text-muted)]">{{ category.skills.length }} skills</p>
            </button>
          }
        </div>
      </div>
    </section>
  `,
})
export class SkillsComponent {
  protected readonly categories = SKILL_CATEGORIES;
  protected readonly sections = SECTION_IDS;
  protected readonly activeCategory = signal<SkillCategoryId>('frontend');

  selectCategory(id: SkillCategoryId): void {
    this.activeCategory.set(id);
  }
}
