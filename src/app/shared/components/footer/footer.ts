import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { LanguageAwareBase } from '../../base/language-aware.base';
import { Router, RouterLink } from '@angular/router';
import { SocialButtonsService } from '../../services/social-buttons.service';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer extends LanguageAwareBase {
  socialBtns = inject(SocialButtonsService).socialBtns;

  constructor(languageService: LanguageService, public router: Router) {
    super(languageService);
  }
}
