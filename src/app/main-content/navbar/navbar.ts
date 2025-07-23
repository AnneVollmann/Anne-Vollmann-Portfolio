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

  @Output()language = new EventEmitter<string>();

  setLanguage(language: string) {
    this.currentLanguage = language;
    this.language.emit(this.currentLanguage);
  }

  setSection(section: string) {
    this.currentSection = section;
  }
}