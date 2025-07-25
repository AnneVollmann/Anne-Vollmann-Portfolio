import { Routes } from '@angular/router';
import { MainContent } from './main-content/main-content';
import { PrivacyPolicy } from './privacy-policy/privacy-policy';

export const routes: Routes = [
    { path: '', component: MainContent },
    { path: 'main-content', component: MainContent },
    { path: 'privacy-policy', component: PrivacyPolicy }
];
