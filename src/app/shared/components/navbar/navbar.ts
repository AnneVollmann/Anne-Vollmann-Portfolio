import { CommonModule, NgClass } from '@angular/common';
import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { LanguageAwareBase } from '../../base/language-aware.base';

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

  /**
  * This function sets the current-section to empty, when it is not already empty.
  * That happens, when the user interacts with the page (i.e. scrolling, touching, pressing keys).
  * Thereby no navbar-class is highlighted as the current-section.
  */
  @HostListener('window:wheel')
  @HostListener('window:keydown')
  @HostListener('window:touchstart')
  @HostListener('window:touchmove')
  onScroll() {
    if (this.currentSection !== '') {
      this.currentSection = ''
    }
  }
}