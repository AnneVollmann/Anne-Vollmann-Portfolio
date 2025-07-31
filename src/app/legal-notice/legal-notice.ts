import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageAwareBase } from '../shared/base/language-aware.base';
import { LanguageService } from '../shared/services/language.service';
import { Navbar } from "../main-content/navbar/navbar";

@Component({
  selector: 'app-legal-notice',
  imports: [CommonModule, Navbar],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss'
})
export class LegalNotice extends LanguageAwareBase {
    constructor(languageService: LanguageService) {
      super(languageService);
    }
}
