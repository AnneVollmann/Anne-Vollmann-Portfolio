import { CommonModule, NgClass} from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [NgClass, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  navBtns = [
    {sectionDe: 'Über mich', sectionEn: 'About me', href: '#about'},
    {sectionDe: 'Skills', sectionEn: 'Skills', href: '#skills'},
    {sectionDe: 'Projekte', sectionEn: 'Projects', href: '#projects'},
    {sectionDe: 'Kontakt', sectionEn: 'Contact', href: '#contact'},
  ];
  currentSection = '';
  languageBtnHovered = false;
  currentLanguage = 'DE';
  burgerMenuOpened = false;

  @Output()language = new EventEmitter<string>();
  @Output()navbarActive = new EventEmitter<boolean>();

  setLanguage(language: string) {
    this.currentLanguage = language;
    this.language.emit(this.currentLanguage);
  }

  setSection(section: string) {
    this.currentSection = section;
  }

  toggleBurgerMenu() {
    this.burgerMenuOpened = !this.burgerMenuOpened;
    this.navbarActive.emit(this.burgerMenuOpened);
  }
}