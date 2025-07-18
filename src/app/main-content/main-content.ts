import { Component } from '@angular/core';
import { LandingPage } from './landing-page/landing-page';
import { Navbar } from './navbar/navbar';
import { AboutMe } from "./about-me/about-me";
import { MySkills } from "./my-skills/my-skills";
import { MyProjects } from "./my-projects/my-projects";
import { ContactMe } from "./contact-me/contact-me";
import { ColleaguesOpinions } from './colleagues-opinions/colleagues-opinions';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-main-content',
  imports: [LandingPage, Navbar, AboutMe, MySkills, MyProjects, ColleaguesOpinions, ContactMe, Footer],
  templateUrl: './main-content.html',
  styleUrl: './main-content.scss'
})
export class MainContent {

}
