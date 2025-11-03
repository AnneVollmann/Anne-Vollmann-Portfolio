import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageAwareBase } from '../../shared/base/language-aware.base';
import { LanguageService } from '../../shared/services/language.service';
import { SocialButtonsService } from '../../shared/services/social-buttons.service';

@Component({
  selector: 'app-landing-page',
  imports: [CommonModule],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss'
})

export class LandingPage extends LanguageAwareBase {
  @Input() navbarActive: boolean = false;
  socialBtns = inject(SocialButtonsService).socialBtns;
  arrowBtnHovered: boolean = false;

  constructor(languageService: LanguageService) {
    super(languageService);
  }
}
