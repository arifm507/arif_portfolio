import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { ContactService } from '../../core/services/contact.service';
import { ToastService } from '../../core/services/toast.service';
import { PROFILE } from '../../data/profile.data';
import { SECTION_IDS } from '../../core/constants/app.constants';
import { isValidExternalLink } from '../../shared/utils/link.util';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, SectionHeaderComponent, RevealOnScrollDirective],
  template: `
    <section [id]="sections.contact" class="section-padding w-full bg-[var(--color-bg-secondary)]">
      <div class="section-container">
        <app-section-header
          eyebrow="Contact"
          title="Get In Touch"
          subtitle="Have a project in mind or want to connect? Send me a message."
        />

        <div class="grid gap-10 lg:grid-cols-5">
          <div class="lg:col-span-2 space-y-6" appRevealOnScroll>
            <div class="glass rounded-2xl p-6">
              <h3 class="mb-4 font-semibold">Contact Information</h3>
              <ul class="space-y-4">
                <li class="flex items-start gap-3">
                  <svg class="mt-0.5 h-5 w-5 text-[var(--color-accent-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                  <div>
                    <p class="text-sm text-[var(--color-text-muted)]">Email</p>
                    <a [href]="'mailto:' + profile.email" class="font-medium hover:text-[var(--color-accent-primary)]">{{ profile.email }}</a>
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="mt-0.5 h-5 w-5 text-[var(--color-accent-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <div>
                    <p class="text-sm text-[var(--color-text-muted)]">Phone</p>
                    <a [href]="'tel:' + profile.phone.replace(/\s/g, '')" class="font-medium">{{ profile.phone }}</a>
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="mt-0.5 h-5 w-5 text-[var(--color-accent-primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                  <div>
                    <p class="text-sm text-[var(--color-text-muted)]">Location</p>
                    <p class="font-medium">{{ profile.location }}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div class="flex gap-3">
              @for (social of profile.socialLinks; track social.label) {
                @if (isValidLink(social.url)) {
                  <a
                    [href]="social.url"
                    [attr.aria-label]="social.label"
                    class="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--color-border-glass)] bg-[var(--color-surface-glass)] text-[var(--color-text-muted)] transition-all hover:border-[var(--color-accent-primary)] hover:text-[var(--color-accent-primary)]"
                  >
                  @switch (social.icon) {
                    @case ('github') {
                      <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                    }
                    @case ('linkedin') {
                      <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    }
                    @case ('email') {
                      <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    }
                    @case ('location') {
                      <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    }
                  }
                </a>
                }
              }
            </div>
          </div>

          <form [formGroup]="form" (ngSubmit)="onSubmit()" class="glass rounded-2xl p-6 lg:col-span-3 lg:p-8" appRevealOnScroll>
            <div class="grid gap-5 sm:grid-cols-2">
              <div class="sm:col-span-1">
                <label for="name" class="mb-1.5 block text-sm font-medium">Name</label>
                <input
                  id="name"
                  type="text"
                  formControlName="name"
                  class="w-full rounded-xl border border-[var(--color-border-glass)] bg-[var(--color-surface-glass)] px-4 py-2.5 text-sm outline-none transition-colors focus:border-[var(--color-accent-primary)]"
                  placeholder="Your name"
                />
                @if (form.controls.name.touched && form.controls.name.invalid) {
                  <p class="mt-1 text-xs text-red-400">Name is required (min 2 characters).</p>
                }
              </div>
              <div class="sm:col-span-1">
                <label for="email" class="mb-1.5 block text-sm font-medium">Email</label>
                <input
                  id="email"
                  type="email"
                  formControlName="email"
                  class="w-full rounded-xl border border-[var(--color-border-glass)] bg-[var(--color-surface-glass)] px-4 py-2.5 text-sm outline-none transition-colors focus:border-[var(--color-accent-primary)]"
                  placeholder="you@example.com"
                />
                @if (form.controls.email.touched && form.controls.email.invalid) {
                  <p class="mt-1 text-xs text-red-400">Valid email is required.</p>
                }
              </div>
            </div>
            <div class="mt-5">
              <label for="subject" class="mb-1.5 block text-sm font-medium">Subject</label>
              <input
                id="subject"
                type="text"
                formControlName="subject"
                class="w-full rounded-xl border border-[var(--color-border-glass)] bg-[var(--color-surface-glass)] px-4 py-2.5 text-sm outline-none transition-colors focus:border-[var(--color-accent-primary)]"
                placeholder="Project inquiry"
              />
              @if (form.controls.subject.touched && form.controls.subject.invalid) {
                <p class="mt-1 text-xs text-red-400">Subject is required.</p>
              }
            </div>
            <div class="mt-5">
              <label for="message" class="mb-1.5 block text-sm font-medium">Message</label>
              <textarea
                id="message"
                formControlName="message"
                rows="5"
                class="w-full resize-none rounded-xl border border-[var(--color-border-glass)] bg-[var(--color-surface-glass)] px-4 py-2.5 text-sm outline-none transition-colors focus:border-[var(--color-accent-primary)]"
                placeholder="Tell me about your project..."
              ></textarea>
              @if (form.controls.message.touched && form.controls.message.invalid) {
                <p class="mt-1 text-xs text-red-400">Message is required (min 10 characters).</p>
              }
            </div>
            <button
              type="submit"
              class="btn-primary mt-6 w-full sm:w-auto"
              [disabled]="submitting()"
            >
              @if (submitting()) {
                Sending...
              } @else {
                Send Message
              }
            </button>
          </form>
        </div>
      </div>
    </section>
  `,
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  private readonly contactService = inject(ContactService);
  private readonly toast = inject(ToastService);

  protected readonly profile = PROFILE;
  protected readonly sections = SECTION_IDS;
  protected readonly submitting = signal(false);
  protected readonly isValidLink = isValidExternalLink;

  protected readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.toast.show('Please fix the form errors.', 'error');
      return;
    }

    this.submitting.set(true);
    this.contactService.submitContact(this.form.getRawValue()).subscribe({
      next: () => {
        this.submitting.set(false);
        this.form.reset();
        this.toast.show('Message sent successfully! I will get back to you soon.', 'success');
      },
      error: () => {
        this.submitting.set(false);
        this.toast.show('Something went wrong. Please try again.', 'error');
      },
    });
  }
}
