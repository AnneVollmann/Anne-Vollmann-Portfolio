import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LanguageService } from '../../shared/services/language.service';
import { LanguageAwareBase } from '../../shared/base/language-aware.base';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-me',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.scss'
})
export class ContactMe extends LanguageAwareBase {

  http = inject(HttpClient);

  arrowBtnHovered = false;
  mailHovered = false;
  phoneHovered = false;
  checkboxHovered = false;

  checkboxChecked = false;

  contactData = {
    name: "",
    mail: "",
    message: ""
  };

  post = {
    endPoint: 'https://anne-vollmann.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  inquiryMessageShown = false;

  constructor(languageService: LanguageService) {
    super(languageService);
  }

  /**
  * This function checks, if the submitted form is filled in correctly. If so, the form resets and the contact-request is posted
  * 
  * @param {NgForm} ngForm - the contact-form
  */
  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.inquiryMessageShown) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.checkboxChecked = false;
            this.inquirySuccessfulMessage();
          },
          error: (error) => console.error(error),
          complete: () => console.info('send post complete'),
        });
    }
  }

  /**
  * This function sets the showInquiryMessage to true, so that the according message is visible. 
  * After the message-animation is completed, the variable is set back to false.
  */
  inquirySuccessfulMessage() {
    this.inquiryMessageShown = true;
    setTimeout(() => {
      this.inquiryMessageShown = false;
    }, 5000);
  }
}