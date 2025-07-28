import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../shared/services/language.service';
import { LanguageAwareBase } from '../../shared/base/language-aware.base';

@Component({
  selector: 'app-contact-me',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.scss'
})
export class ContactMe extends LanguageAwareBase {
  arrowBtnHovered = false;
  mailHovered = false;
  phoneHovered = false;
  checkboxHovered = false;
  checkboxChecked = false;

  nameError = false;
  mailError = false;
  messageError = false;
  checkboxError = false;

  constructor(languageService: LanguageService) {
    super(languageService);
  }

  checkInput(field: string) { }

  onSubmit() {
    // console.log(1)
  }
}
