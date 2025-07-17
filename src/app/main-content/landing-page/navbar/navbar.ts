import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [NgClass, CommonModule, NgStyle],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  navBtns = [
    {section: 'About me', href: '#about'},
    {section: 'Skills', href: '#skills'},
    {section: 'Projects', href: '#projects'},
    {section: 'Contact', href: '#contact'},
  ];

  languageBtnHovered = false;
  currentLanguage = 'DE';
  currentSection = '';

  setLanguage(language: string) {
    this.currentLanguage = language;
  }

  setSection(section: string) {
    this.currentSection = section;
  }
}