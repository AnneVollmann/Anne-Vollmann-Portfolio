import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  @Input()language = 'DE';

  //insert correct mail
  socialBtns = [
    { srcBase: 'assets/icons/button_mail', alt: 'mailBtn', hover: false, href:''},
    { srcBase: 'assets/icons/button_github', alt: 'githubBtn', hover: false, href:'https://github.com/AnneVollmann'},
    { srcBase: 'assets/icons/button_linkedin', alt: 'linkedinBtn', hover: false, href:'https://www.linkedin.com/in/anne-vollmann-38998a332/'}
  ];

  setSocialBtnHovered(btn: any, hover: boolean) {
    btn.src = `assets/icons/${btn.base}${hover ? '_hover' : ''}.svg`;
  }
}
