import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const CHAR_SPACE_HYPHEN_REGEX = /^[A-Za-z\s-]+$/;

@Component({
  selector: 'app-reservations',
  standalone: false,
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.scss'
})
export class ReservationsComponent {
  reservationForm: FormGroup;
  showDialog = false;
  dialogData: any = null;
  submitted = false;

  constructor(private fb: FormBuilder) {
    const now = new Date();
    const formattedNow = now.toISOString().slice(0, 16);

    this.reservationForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(CHAR_SPACE_HYPHEN_REGEX)]],
      email: ['', [Validators.required, Validators.email]],
      datetime: [formattedNow, [Validators.required]],
      people: ['', [Validators.required]],
      requests: ['', [Validators.maxLength(250), Validators.pattern(CHAR_SPACE_HYPHEN_REGEX)]]
    });

    this.reservationForm.valueChanges.subscribe(() => {
      this.submitted = false;
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.reservationForm.invalid) {
      this.reservationForm.markAllAsTouched();
      return;
    }
    this.dialogData = this.reservationForm.value;
    this.showDialog = true;
    this.submitted = false;
  }

  closeDialog() {
    this.showDialog = false;
    this.dialogData = null;
  }

  getFirstError(): string | null {
    const controls = [
      { key: 'name', errors: this.reservationForm.get('name')?.errors },
      { key: 'email', errors: this.reservationForm.get('email')?.errors },
      { key: 'datetime', errors: this.reservationForm.get('datetime')?.errors },
      { key: 'people', errors: this.reservationForm.get('people')?.errors },
      { key: 'requests', errors: this.reservationForm.get('requests')?.errors }
    ];

    for (const control of controls) {
      if (control.errors) {
        if (control.errors['required']) {
          if (control.key === 'name') return 'Name is required.';
          if (control.key === 'email') return 'Email is required.';
          if (control.key === 'datetime') return 'Date & Time is required.';
          if (control.key === 'people') return 'Number of People is required.';
        }
        if (control.key === 'name') {
          if (control.errors['maxlength']) return 'Name must be at most 50 characters.';
          if (control.errors['pattern']) return 'Name can only contain letters, spaces, and hyphens.';
        }
        if (control.key === 'email') {
          if (control.errors['email']) return 'Email must be valid.';
        }
        if (control.key === 'requests') {
          if (control.errors['maxlength']) return 'Special Requests must be at most 250 characters.';
          if (control.errors['pattern']) return 'Special Requests can only contain letters, spaces, and hyphens.';
        }
      }
    }
    return null;
  }
}
