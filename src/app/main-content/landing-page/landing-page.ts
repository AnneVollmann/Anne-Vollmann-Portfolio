import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageAwareBase } from '../../shared/base/language-aware.base';
import { LanguageService } from '../../shared/services/language.service';

@Component({
  selector: 'app-landing-page',
  imports: [CommonModule],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss'
})

export class LandingPage extends LanguageAwareBase {
  @Input() navbarActive = false;

  constructor(languageService: LanguageService) {
    super(languageService);
  }

  //insert correct mail
  socialBtns = [
    { srcBase: 'assets/icons/button_mail_blue', alt: 'mailBtn', hover: false, href: '' },
    { srcBase: 'assets/icons/button_github_blue', alt: 'githubBtn', hover: false, href: 'https://github.com/AnneVollmann' },
    { srcBase: 'assets/icons/button_linkedin_blue', alt: 'linkedinBtn', hover: false, href: 'https://www.linkedin.com/in/anne-vollmann-38998a332/' }
  ];
  arrowBtnHovered = false;
}
