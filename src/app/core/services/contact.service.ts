import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { ContactForm } from '../../models/contact.model';

@Injectable({ providedIn: 'root' })
export class ContactService {
  submitContact(form: ContactForm): Observable<{ success: boolean }> {
    console.info('[ContactService] Submission received:', form);
    return of({ success: true }).pipe(delay(800));
  }
}
