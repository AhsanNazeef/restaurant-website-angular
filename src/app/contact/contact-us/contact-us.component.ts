import { Component } from '@angular/core';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-us',
  standalone: false,
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  faEnvelopeOpen = faEnvelopeOpen;
  showDialog = false;
  dialogData: any = null;

  name = '';
  email = '';
  subject = '';
  message = '';
  submitted = false;

  onSubmit(form: any) {
    this.submitted = true;
    if (form.invalid) {
      return;
    }
    this.dialogData = {
      name: this.name,
      email: this.email,
      subject: this.subject,
      message: this.message
    };
    this.showDialog = true;
    this.submitted = false;
    form.resetForm();
  }

  getFirstError(nameCtrl: any, emailCtrl: any, subjectCtrl: any, messageCtrl: any): string | null {
    if (nameCtrl.invalid) {
      if (nameCtrl.errors?.['required']) return 'Name is required.';
      if (nameCtrl.errors?.['maxlength']) return 'Name must be at most 50 characters.';
    }
    if (emailCtrl.invalid) {
      if (emailCtrl.errors?.['required']) return 'Email is required.';
      if (emailCtrl.errors?.['email']) return 'Email must be valid.';
    }
    if (subjectCtrl.invalid) {
      if (subjectCtrl.errors?.['required']) return 'Subject is required.';
      if (subjectCtrl.errors?.['maxlength']) return 'Subject must be at most 100 characters.';
    }
    if (messageCtrl.invalid) {
      if (messageCtrl.errors?.['required']) return 'Message is required.';
      if (messageCtrl.errors?.['maxlength']) return 'Message must be at most 500 characters.';
    }
    return null;
  }

  closeDialog() {
    this.showDialog = false;
    this.dialogData = null;
  }
}
