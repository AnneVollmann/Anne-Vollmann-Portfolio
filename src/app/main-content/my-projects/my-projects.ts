import { Component, inject } from '@angular/core';
import { ProjectsdataService } from '../../projectsdata.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-projects',
  imports: [CommonModule],
  templateUrl: './my-projects.html',
  styleUrl: './my-projects.scss'
})
export class MyProjects {
  myProjects = inject(ProjectsdataService);
  currentProjectIndex = 0;

  setCurrentProject(index: Number) {
    this.currentProjectIndex = Number(index);
  }
}
