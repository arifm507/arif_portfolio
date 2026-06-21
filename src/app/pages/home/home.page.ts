import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  afterNextRender,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HeroComponent } from '../../features/hero/hero.component';
import { AboutComponent } from '../../features/about/about.component';
import { SkillsComponent } from '../../features/skills/skills.component';
import { ProjectsComponent } from '../../features/projects/projects.component';
import { ExperienceComponent } from '../../features/experience/experience.component';
import { EducationComponent } from '../../features/education/education.component';
import { ResumeComponent } from '../../features/resume/resume.component';
import { ContactComponent } from '../../features/contact/contact.component';
import { ScrollSpyService } from '../../core/services/scroll-spy.service';
import { SeoService } from '../../core/services/seo.service';
import { PROFILE } from '../../data/profile.data';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    EducationComponent,
    ResumeComponent,
    ContactComponent,
  ],
  template: `
    <div class="relative w-full overflow-hidden">
      <app-hero />
      <app-about />
      <app-skills />
      <app-projects />
      <app-experience />
      <app-education />
      <app-resume />
      <app-contact />
    </div>
  `,
})
export class HomePage implements OnInit, OnDestroy {
  private readonly scrollSpy = inject(ScrollSpyService);
  private readonly seo = inject(SeoService);
  private readonly platformId = inject(PLATFORM_ID);

  constructor() {
    afterNextRender(() => {
      this.scrollSpy.init();
    });
  }

  ngOnInit(): void {
    this.setupSeo();
  }

  ngOnDestroy(): void {
    this.scrollSpy.destroy();
  }

  private setupSeo(): void {
    const profile = PROFILE;
    const origin = isPlatformBrowser(this.platformId) ? window.location.origin : '';
    const ogImage = origin ? `${origin}${profile.photoUrl}` : profile.photoUrl;
    const pageUrl = origin ? `${origin}/` : '/';

    this.seo.setPageMeta({
      title: 'Mohammad Arif | Software Developer & Technical Team Lead',
      description:
        'Portfolio of Mohammad Arif — Technical Team Lead and Full-Stack Developer specializing in Angular 21, .NET Core, React, and AWS cloud solutions.',
      keywords:
        'Mohammad Arif, Software Developer, Angular, .NET Core, Full-Stack Developer, Technical Team Lead, Portfolio, Noida',
      author: profile.fullName,
      ogTitle: 'Mohammad Arif | Software Developer & Technical Team Lead',
      ogDescription: profile.tagline,
      ogImage,
      ogUrl: pageUrl,
      twitterCard: 'summary_large_image',
    });

    this.seo.setPersonSchema({
      name: profile.fullName,
      jobTitle: profile.title,
      email: profile.email,
      url: pageUrl,
      image: ogImage,
      addressLocality: profile.location,
      sameAs: [profile.linkedIn, profile.github],
    });
  }
}
