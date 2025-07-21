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
    { srcBase: 'assets/icons/button_mail_blue', alt: 'mailBtn', hover: false},
    { srcBase: 'assets/icons/button_github_blue', alt: 'githubBtn', hover: false},
    { srcBase: 'assets/icons/button_linkedin_blue', alt: 'linkedinBtn', hover: false}
  ];
  arrowBtnHovered = false;

  //ggf. global
  setArrowBtnHovered(hover: boolean) {
    this.arrowBtnHovered = hover;
  }
}
