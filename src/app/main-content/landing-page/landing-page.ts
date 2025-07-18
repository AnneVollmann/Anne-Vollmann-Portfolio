import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  imports: [CommonModule],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss'
})

export class LandingPage {
  socialBtns = [
    { src: 'assets/icons/button_mail.svg', alt: 'button mail', base: 'button_mail' },
    { src: 'assets/icons/button_github.svg', alt: 'button github', base: 'button_github' },
    { src: 'assets/icons/button_linkedin.svg', alt: 'button linkedin', base: 'button_linkedin' }
  ];

  arrowBtnHovered = false;


  setSocialBtnHovered(btn: any, hover: boolean) {
    btn.src = `assets/icons/${btn.base}${hover ? '_hover' : ''}.svg`;
  }

  //ggf. global
  setArrowBtnHovered(hover: boolean) {
    this.arrowBtnHovered = hover;
  }
}
