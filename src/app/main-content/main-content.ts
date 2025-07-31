import { Component } from '@angular/core';
import { LandingPage } from './landing-page/landing-page';
import { Navbar } from '../shared/components/navbar/navbar';
import { AboutMe } from "./about-me/about-me";
import { MySkills } from "./my-skills/my-skills";
import { MyProjects } from "./my-projects/my-projects";
import { References } from './references/references';
import { ContactMe } from "./contact-me/contact-me";

@Component({
  selector: 'app-main-content',
  imports: [LandingPage, Navbar, AboutMe, MySkills, MyProjects, References, ContactMe],
  templateUrl: './main-content.html',
  styleUrl: './main-content.scss'
})
export class MainContent {
  navbarActive: boolean = false;
}