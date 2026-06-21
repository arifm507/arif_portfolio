import { TestBed } from '@angular/core/testing';
import { Meta } from '@angular/platform-browser';
import { ThemeService } from './theme.service';
import { THEME_STORAGE_KEY } from '../constants/app.constants';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: (query: string) => ({
        matches: query.includes('dark'),
        media: query,
        addEventListener: () => undefined,
        removeEventListener: () => undefined,
        addListener: () => undefined,
        removeListener: () => undefined,
        dispatchEvent: () => false,
      }),
    });

    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  it('should default to dark theme when no preference is stored', () => {
    service.initFromStorage();
    expect(service.isDark()).toBe(true);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('should toggle theme and persist to localStorage', () => {
    service.initFromStorage();
    service.toggle();
    expect(service.isDark()).toBe(false);
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('light');
    expect(document.documentElement.classList.contains('light')).toBe(true);
  });

  it('should restore theme from localStorage', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'light');
    service.initFromStorage();
    expect(service.isDark()).toBe(false);
  });

  it('should update theme-color meta tag', () => {
    const meta = TestBed.inject(Meta);
    service.initFromStorage();
    service.setTheme('light');
    expect(meta.getTag('name="theme-color"')?.content).toBe('#fafafa');
  });
});
