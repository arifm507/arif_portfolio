import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';
import { ToastService } from '../../core/services/toast.service';

describe('ContactComponent', () => {
  let fixture: ComponentFixture<ContactComponent>;
  let toast: ToastService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    toast = TestBed.inject(ToastService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should invalidate empty form submission', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    compiled.querySelector('form')?.dispatchEvent(new Event('submit'));
    fixture.detectChanges();
    expect(toast.visible()).toBe(true);
    expect(toast.type()).toBe('error');
  });

  it('should render required form fields', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#name')).toBeTruthy();
    expect(compiled.querySelector('#email')).toBeTruthy();
    expect(compiled.querySelector('#subject')).toBeTruthy();
    expect(compiled.querySelector('#message')).toBeTruthy();
  });
});
