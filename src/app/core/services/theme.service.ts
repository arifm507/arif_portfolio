import { Injectable, PLATFORM_ID, computed, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Meta } from '@angular/platform-browser';
import {
  DEFAULT_THEME,
  THEME_COLORS,
  THEME_STORAGE_KEY,
  Theme,
} from '../constants/app.constants';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly meta = inject(Meta);
  private readonly themeSignal = signal<Theme>(DEFAULT_THEME);

  readonly theme = this.themeSignal.asReadonly();
  readonly isDark = computed(() => this.themeSignal() === 'dark');

  initFromStorage(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const stored = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
    const prefersDark =
      typeof window.matchMedia === 'function'
        ? window.matchMedia('(prefers-color-scheme: dark)').matches
        : DEFAULT_THEME === 'dark';
    const theme = stored ?? (prefersDark ? 'dark' : 'light');
    this.applyTheme(theme, false);
  }

  toggle(): void {
    this.setTheme(this.isDark() ? 'light' : 'dark');
  }

  setTheme(theme: Theme): void {
    this.applyTheme(theme, true);
  }

  private applyTheme(theme: Theme, persist: boolean): void {
    this.themeSignal.set(theme);

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const root = document.documentElement;
    root.classList.remove('dark', 'light');
    root.classList.add(theme);
    root.style.colorScheme = theme;

    this.updateThemeColorMeta(theme);

    if (persist) {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    }
  }

  private updateThemeColorMeta(theme: Theme): void {
    const content = THEME_COLORS[theme];
    const tag = this.meta.getTag('name="theme-color"');

    if (tag) {
      this.meta.updateTag({ name: 'theme-color', content });
    } else {
      this.meta.addTag({ name: 'theme-color', content });
    }
  }
}
