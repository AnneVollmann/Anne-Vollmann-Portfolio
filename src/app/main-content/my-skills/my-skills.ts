import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../../shared/services/language.service';
import { LanguageAwareBase } from '../../shared/base/language-aware.base';
import { Technology } from "../../shared/models/technology.model"

interface SkillIcon {
  src: string,
  alt: Technology
}

@Component({
  selector: 'app-my-skills',
  imports: [CommonModule],
  templateUrl: './my-skills.html',
  styleUrl: './my-skills.scss'
})

export class MySkills extends LanguageAwareBase {
  skillIcons: SkillIcon[] = [
    { src: 'assets/icons/icon_angular.svg', alt: 'Angular' },
    { src: 'assets/icons/icon_typescript.svg', alt: 'TypeScript' },
    { src: 'assets/icons/icon_javascript.svg', alt: 'JavaScript' },
    { src: 'assets/icons/icon_html.svg', alt: 'Html' },
    { src: 'assets/icons/icon_css.svg', alt: 'Css' },
    { src: 'assets/icons/icon_restapi.svg', alt: 'REST-API' },
    { src: 'assets/icons/icon_firebase.svg', alt: 'Firebase' },
    { src: 'assets/icons/icon_git.svg', alt: 'Git' },
    { src: 'assets/icons/icon_materialdesign.svg', alt: 'Material Design' },
    { src: 'assets/icons/icon_tailwind.svg', alt: 'Tailwind' },
    { src: 'assets/icons/icon_bootstrap.svg', alt: 'Bootstrap' },
    { src: 'assets/icons/icon_scrum.svg', alt: 'Scrum' }
  ]

  learningIcons: SkillIcon[] = [
    { src: 'assets/icons/icon_react.svg', alt: 'React' },
    { src: 'assets/icons/icon_vuejs.svg', alt: 'Vue Js' }
  ]

  constructor(languageService: LanguageService) {
    super(languageService);
  }
}
