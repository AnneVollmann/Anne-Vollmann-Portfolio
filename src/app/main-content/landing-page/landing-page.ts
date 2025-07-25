import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  imports: [CommonModule],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss'
})

export class LandingPage {
  @Input()language = 'DE';
  @Input()navbarActive = false;

  //insert correct mail
  socialBtns = [
    { srcBase: 'assets/icons/button_mail_blue', alt: 'mailBtn', hover: false, href:''},
    { srcBase: 'assets/icons/button_github_blue', alt: 'githubBtn', hover: false, href:'https://github.com/AnneVollmann'},
    { srcBase: 'assets/icons/button_linkedin_blue', alt: 'linkedinBtn', hover: false, href:'https://www.linkedin.com/in/anne-vollmann-38998a332/'}
  ];
  arrowBtnHovered = false;

  //ggf. global
  setArrowBtnHovered(hover: boolean) {
    this.arrowBtnHovered = hover;
  }
}
