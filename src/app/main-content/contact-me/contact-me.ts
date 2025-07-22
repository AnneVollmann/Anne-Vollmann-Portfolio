import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.scss'
})
export class ContactMe {
  @Input()language = 'DE';

  arrowBtnHovered = false;
  mailHovered = false;
  phoneHovered = false;
  checkboxHovered = false;
  checkboxChecked = false;

  nameError = false;
  mailError = false;
  messageError = false;
  checkboxError = false;

  checkInput(field: string) {}

  onSubmit() {
    console.log(1)
  }
}
