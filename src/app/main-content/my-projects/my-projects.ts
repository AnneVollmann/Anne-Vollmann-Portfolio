import { Component, inject, Input } from '@angular/core';
import { ProjectsdataService } from '../../projectsdata.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-projects',
  imports: [CommonModule],
  templateUrl: './my-projects.html',
  styleUrl: './my-projects.scss'
})
export class MyProjects {
  @Input()language = 'DE';

  myProjects = inject(ProjectsdataService);
  currentProjectIndex = 0;

  setCurrentProject(index: Number) {
    this.currentProjectIndex = Number(index);
  }
}
