import { Component } from '@angular/core';
import { LanguageService } from '../shared/services/language.service';
import { LanguageAwareBase } from '../shared/base/language-aware.base';

@Component({
  selector: 'app-privacy-policy',
  imports: [],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss'
})
export class PrivacyPolicy extends LanguageAwareBase {
  constructor(languageService: LanguageService) {
    super(languageService);
  }
}
