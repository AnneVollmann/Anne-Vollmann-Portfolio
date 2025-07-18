import { Component, inject } from '@angular/core';
import { ReferencesdataService } from '../../referencesdata.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-references',
  imports: [CommonModule],
  templateUrl: './references.html',
  styleUrl: './references.scss'
})
export class References {
  references = inject(ReferencesdataService);
}