import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  imports: [CommonModule],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.scss'
})
export class ContactMe {
  arrowBtnHovered = false;
  mailHovered = false;
  phoneHovered = false;
  checkboxHovered = false;
  checkboxChecked = false;

  setArrowBtnHovered(hover: boolean) {
    this.arrowBtnHovered = hover;
  }

  checkInput(id: string) {
    return;
  }

  submitMessage() {
    return;
  }
}
