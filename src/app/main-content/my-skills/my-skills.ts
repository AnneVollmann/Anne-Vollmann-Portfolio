import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  imports: [CommonModule],
  templateUrl: './my-skills.html',
  styleUrl: './my-skills.scss'
})
export class MySkills {
  @Input()language = 'DE';

  skillIcons = [
    {src: 'assets/icons/icon_angular.svg', alt: 'Angular'},
    {src: 'assets/icons/icon_typescript.svg', alt: 'TypeScript'},
    {src: 'assets/icons/icon_javascript.svg', alt: 'JavaScript'},
    {src: 'assets/icons/icon_html.svg', alt: 'HTML'},
    {src: 'assets/icons/icon_css.svg', alt: 'CSS'},
    {src: 'assets/icons/icon_restapi.svg', alt: 'REST-API'},
    {src: 'assets/icons/icon_firebase.svg', alt: 'Firebase'},
    {src: 'assets/icons/icon_git.svg', alt: 'Git'},
    {src: 'assets/icons/icon_materialdesign.svg', alt: 'Material Design'},
    {src: 'assets/icons/icon_scrum.svg', alt: 'Scrum'},
  ]
}
