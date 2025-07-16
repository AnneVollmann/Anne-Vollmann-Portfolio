import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [NgClass],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  languageBtnHovered = false;
  currentLanguage = 'DE';

  setLanguage(language:string) {
    this.currentLanguage = language;
  }
}