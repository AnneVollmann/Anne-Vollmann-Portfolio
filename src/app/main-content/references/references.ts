import { Component, inject } from '@angular/core';
import { ReferencesdataService } from '../../shared/services/referencesdata.service';
import { CommonModule } from '@angular/common';
import { LanguageAwareBase } from '../../shared/base/language-aware.base';
import { LanguageService } from '../../shared/services/language.service';


@Component({
  selector: 'app-references',
  imports: [CommonModule],
  templateUrl: './references.html',
  styleUrl: './references.scss'
})
export class References extends LanguageAwareBase {
  references = inject(ReferencesdataService);

  constructor(languageService: LanguageService) {
    super(languageService);
  }
}