import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TypingTextComponent } from '../../shared/components/typing-text/typing-text.component';
import { LazyImageComponent } from '../../shared/components/lazy-image/lazy-image.component';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { ScrollSpyService } from '../../core/services/scroll-spy.service';
import { PROFILE } from '../../data/profile.data';
import { SECTION_IDS } from '../../core/constants/app.constants';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TypingTextComponent, LazyImageComponent, RevealOnScrollDirective],
  template: `
    <section [id]="sections.hero" class="section-padding relative flex min-h-screen w-full items-center">
      <div class="mesh-bg" aria-hidden="true">
        <div class="mesh-blob animate-float h-72 w-72 -left-32 top-0 bg-indigo-500 sm:h-96 sm:w-96 sm:-left-48"></div>
        <div class="mesh-blob animate-pulse-glow h-64 w-64 -right-24 top-1/4 bg-cyan-500 sm:h-80 sm:w-80 sm:-right-32"></div>
        <div class="mesh-blob animate-float h-48 w-48 bottom-0 left-1/4 bg-violet-500 sm:h-64 sm:w-64 sm:left-1/3" style="animation-delay: 2s"></div>
      </div>

      <div class="section-container relative z-10 w-full">
        <div class="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div appRevealOnScroll>
            <p class="mb-4 text-sm font-medium uppercase tracking-widest text-[var(--color-accent-primary)]">
              Welcome to my portfolio
            </p>
            <h1 class="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Hi, I'm
              <span class="gradient-text mt-1 block sm:mt-0 sm:inline">{{ profile.fullName }}</span>
            </h1>
            <p class="mb-2 min-h-[2rem] text-lg text-[var(--color-text-muted)] sm:text-xl md:text-2xl">
              <app-typing-text [words]="profile.typingRoles" />
            </p>
            <p class="max-w-xl text-sm leading-relaxed text-[var(--color-text-muted)] sm:text-base">{{ profile.tagline }}</p>
            <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a [href]="profile.resumeUrl" download class="btn-primary w-full justify-center sm:w-auto">
                <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>
                </svg>
                Download Resume
              </a>
              <button type="button" (click)="scrollTo(sections.contact)" class="btn-secondary w-full justify-center sm:w-auto">Contact Me</button>
              <button type="button" (click)="scrollTo(sections.projects)" class="btn-secondary w-full justify-center sm:w-auto">View Projects</button>
            </div>
          </div>

          <div class="flex justify-center lg:justify-end" appRevealOnScroll [appRevealOnScrollDelay]="150">
            <div class="gradient-border relative mx-auto max-w-[min(100%,24rem)]">
              <div class="relative overflow-hidden rounded-2xl p-1">
                <app-lazy-image
                  [src]="profile.photoUrl"
                  [alt]="profile.fullName + ' profile photo'"
                  [width]="384"
                  [height]="384"
                  [priority]="true"
                  wrapperClass="h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96 rounded-2xl"
                  imgClass="h-64 w-64 rounded-2xl object-cover object-[50%_24%] sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96"
                />
                <div class="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-[var(--color-bg-primary)]/40 to-transparent"></div>
              </div>
              <div class="glass absolute -bottom-3 left-1/2 max-w-[90%] -translate-x-1/2 rounded-xl px-4 py-2 text-center text-sm font-medium sm:-bottom-4 sm:left-auto sm:translate-x-0 sm:text-left lg:-left-4">
                <span class="gradient-text">{{ profile.title.split('·')[0].trim() }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HeroComponent {
  private readonly scrollSpy = inject(ScrollSpyService);
  protected readonly profile = PROFILE;
  protected readonly sections = SECTION_IDS;

  scrollTo(sectionId: string): void {
    this.scrollSpy.smoothScrollTo(sectionId as typeof SECTION_IDS.hero);
  }
}
