import { Component } from '@angular/core';
import { LanguageAwareBase } from '../../shared/base/language-aware.base';
import { LanguageService } from '../../shared/services/language.service';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss'
})
export class AboutMe extends LanguageAwareBase {

  constructor(languageService: LanguageService) {
    super(languageService);
  }
}
