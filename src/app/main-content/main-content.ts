import { Component, EventEmitter, Output } from '@angular/core';
import { LandingPage } from './landing-page/landing-page';
import { Navbar } from './navbar/navbar';
import { AboutMe } from "./about-me/about-me";
import { MySkills } from "./my-skills/my-skills";
import { MyProjects } from "./my-projects/my-projects";
import { References } from './references/references';
import { ContactMe } from "./contact-me/contact-me";
import { Footer } from '../shared/components/footer/footer';

@Component({
  selector: 'app-main-content',
  imports: [LandingPage, Navbar, AboutMe, MySkills, MyProjects, References, ContactMe, Footer],
  templateUrl: './main-content.html',
  styleUrl: './main-content.scss'
})
export class MainContent {
  currentLanguage: string = 'DE';
  @Output()language = new EventEmitter<string>();

  setLanguage(language:string) {
    this.currentLanguage = language;
    this.language.emit(this.currentLanguage);
  }
}
