import { Routes } from '@angular/router';
import { MainContent } from './main-content/main-content';
import { PrivacyPolicy } from './privacy-policy/privacy-policy';
import { LegalNotice } from './legal-notice/legal-notice';

export const routes: Routes = [
    { path: '', component: MainContent },
    { path: 'main-content', component: MainContent },
    { path: 'privacy-policy', component: PrivacyPolicy },
    { path: 'legal-notice', component: LegalNotice }
];
