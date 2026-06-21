import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { TechBadgeComponent } from '../../shared/components/tech-badge/tech-badge.component';
import { LazyImageComponent } from '../../shared/components/lazy-image/lazy-image.component';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { PROJECTS, PROJECT_FILTERS } from '../../data/projects.data';
import { SECTION_IDS } from '../../core/constants/app.constants';

@Component({
  selector: 'app-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeaderComponent, TechBadgeComponent, RevealOnScrollDirective, LazyImageComponent],
  template: `
    <section [id]="sections.projects" class="section-padding w-full bg-[var(--color-bg-secondary)]">
      <div class="section-container">
        <app-section-header
          eyebrow="Projects"
          title="Featured Work"
          subtitle="Enterprise portals, SaaS platforms, and full-stack applications I've delivered."
        />

        <div class="mb-8 flex flex-wrap gap-2" appRevealOnScroll>
          @for (filter of filters; track filter) {
            <button
              type="button"
              (click)="selectedFilter.set(filter)"
              class="rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200"
              [class.border-[var(--color-accent-primary)]]="selectedFilter() === filter"
              [class.bg-[var(--color-card-hover)]]="selectedFilter() === filter"
              [class.text-[var(--color-accent-primary)]]="selectedFilter() === filter"
              [class.border-[var(--color-border-glass)]]="selectedFilter() !== filter"
              [class.text-[var(--color-text-muted)]]="selectedFilter() !== filter"
            >
              {{ filter }}
            </button>
          }
        </div>

        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          @for (project of filteredProjects(); track project.id; let i = $index) {
            <article
              class="group glass overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent-primary)] hover:shadow-xl"
              appRevealOnScroll
              [appRevealOnScrollDelay]="i * 60"
            >
              <div class="relative aspect-video overflow-hidden bg-[var(--color-surface-glass)]">
                <app-lazy-image
                  [src]="project.imageUrl"
                  [alt]="project.title + ' screenshot'"
                  wrapperClass="h-full w-full"
                  imgClass="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                @if (project.featured) {
                  <span class="absolute left-3 top-3 rounded-full bg-[var(--color-accent-primary)] px-2.5 py-0.5 text-xs font-medium text-white">
                    Featured
                  </span>
                }
                <div class="absolute inset-0 flex items-center justify-center gap-3 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  @if (project.liveUrl) {
                    <a [href]="project.liveUrl" target="_blank" rel="noopener noreferrer" class="btn-primary text-xs !py-2 !px-3">
                      Live Demo
                    </a>
                  }
                  @if (project.githubUrl) {
                    <a [href]="project.githubUrl" target="_blank" rel="noopener noreferrer" class="btn-secondary text-xs !py-2 !px-3">
                      GitHub
                    </a>
                  }
                  @if (!project.liveUrl && !project.githubUrl) {
                    <span class="text-sm text-white/80">Demo coming soon</span>
                  }
                </div>
              </div>
              <div class="p-5">
                <h3 class="text-lg font-semibold">{{ project.title }}</h3>
                <p class="mt-2 line-clamp-3 text-sm text-[var(--color-text-muted)]">{{ project.description }}</p>
                <ul class="mt-3 space-y-1">
                  @for (feature of project.features.slice(0, 3); track feature) {
                    <li class="flex items-start gap-2 text-xs text-[var(--color-text-muted)]">
                      <span class="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent-primary)]"></span>
                      {{ feature }}
                    </li>
                  }
                </ul>
                <div class="mt-4 flex flex-wrap gap-1.5">
                  @for (tech of project.technologies.slice(0, 5); track tech) {
                    <app-tech-badge [label]="tech" />
                  }
                </div>
              </div>
            </article>
          }
        </div>

        @if (filteredProjects().length === 0) {
          <p class="py-12 text-center text-[var(--color-text-muted)]">No projects match this filter.</p>
        }
      </div>
    </section>
  `,
})
export class ProjectsComponent {
  protected readonly projects = PROJECTS;
  protected readonly filters = PROJECT_FILTERS;
  protected readonly sections = SECTION_IDS;
  protected readonly selectedFilter = signal('All');

  protected readonly filteredProjects = computed(() => {
    const filter = this.selectedFilter();
    if (filter === 'All') {
      return this.projects;
    }
    if (filter === '.NET') {
      return this.projects.filter(
        (p) =>
          p.category === '.NET' ||
          p.technologies.some((t) => t.includes('.NET') || t.includes('ASP.NET')),
      );
    }
    if (filter === 'AWS') {
      return this.projects.filter((p) =>
        p.technologies.some((t) => t.toLowerCase().includes('aws')),
      );
    }
    return this.projects.filter(
      (p) => p.category === filter || p.technologies.some((t) => t.includes(filter)),
    );
  });
}
