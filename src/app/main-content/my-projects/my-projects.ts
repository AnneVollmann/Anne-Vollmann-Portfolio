import { Component, inject } from '@angular/core';
import { ProjectsdataService } from '../../shared/services/projectsdata.service';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../shared/services/language.service';
import { LanguageAwareBase } from '../../shared/base/language-aware.base';

@Component({
  selector: 'app-my-projects',
  imports: [CommonModule],
  templateUrl: './my-projects.html',
  styleUrl: './my-projects.scss'
})
export class MyProjects extends LanguageAwareBase {
  myProjects = inject(ProjectsdataService);
  currentProjectIndex = 0;

  constructor(languageService: LanguageService) {
    super(languageService);
  }
}
