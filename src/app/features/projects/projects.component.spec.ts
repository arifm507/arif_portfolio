import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show all projects by default', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('article').length).toBe(8);
  });

  it('should filter Angular projects via UI', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const angularBtn = [...compiled.querySelectorAll('button')].find(
      (btn) => btn.textContent?.trim() === 'Angular',
    );
    angularBtn?.click();
    fixture.detectChanges();
    const count = compiled.querySelectorAll('article').length;
    expect(count).toBeGreaterThan(0);
    expect(count).toBeLessThan(8);
  });

  it('should filter .NET projects via UI', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const netBtn = [...compiled.querySelectorAll('button')].find(
      (btn) => btn.textContent?.trim() === '.NET',
    );
    netBtn?.click();
    fixture.detectChanges();
    expect(compiled.querySelectorAll('article').length).toBeGreaterThan(0);
  });

  it('should show empty state for unmatched filter', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const awsBtn = [...compiled.querySelectorAll('button')].find(
      (btn) => btn.textContent?.trim() === 'AWS',
    );
    awsBtn?.click();
    fixture.detectChanges();
    expect(compiled.textContent).toContain('No projects match this filter');
  });
});
