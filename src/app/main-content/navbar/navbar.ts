import { CommonModule, NgClass } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { LanguageService } from '../../shared/services/language.service';
import { LanguageAwareBase } from '../../shared/base/language-aware.base';

@Component({
  selector: 'app-navbar',
  imports: [NgClass, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar extends LanguageAwareBase {
  navBtns = [
    { sectionDe: 'Über mich', sectionEn: 'About me', href: '#about' },
    { sectionDe: 'Skills', sectionEn: 'Skills', href: '#skills' },
    { sectionDe: 'Projekte', sectionEn: 'Projects', href: '#projects' },
    { sectionDe: 'Kontakt', sectionEn: 'Contact', href: '#contact' },
  ];
  currentSection = '';
  languageBtnHovered = false;
  burgerMenuOpened = false;

  constructor(languageService: LanguageService) {
    super(languageService);
  }

  @Output() navbarActive = new EventEmitter<boolean>();

  /**
  * This function emits the state of the burgerMenuOpened property. Thereby the landing-page is able to access the value and changes the appearence of the photo accordingly (small-screens only).
  */
  emitNavbarActive() {
    this.navbarActive.emit(this.burgerMenuOpened);
  }
}