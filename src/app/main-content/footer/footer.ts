import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  socialBtns = [
    { srcBase: 'assets/icons/button_mail', alt: 'mailBtn', hover: false},
    { srcBase: 'assets/icons/button_github', alt: 'githubBtn', hover: false},
    { srcBase: 'assets/icons/button_linkedin', alt: 'linkedinBtn', hover: false}
  ];

  setSocialBtnHovered(btn: any, hover: boolean) {
    btn.src = `assets/icons/${btn.base}${hover ? '_hover' : ''}.svg`;
  }
}
