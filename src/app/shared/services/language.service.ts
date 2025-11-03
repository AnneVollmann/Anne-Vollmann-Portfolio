import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Language } from '../models/language.model';

@Injectable({
    providedIn: 'root'
})

export class LanguageService {
    private languageSubject = new BehaviorSubject<Language>('DE');
    language$ = this.languageSubject.asObservable();

    /**
    * This function sets the current language to the given language.
    * After that, this new current language is saved in the local storage.
    *
    * @param {Language} language - the language the user has chosen (DE or EN)
    */
    setLanguage(language: Language) {
        this.languageSubject.next(language);
        localStorage.setItem('language', language);
    }

    /**
    * This function restores the language saved in the local storage.
    * If a language was saved there, this language becomes the new current language. (else the current language is german (default value))
    */
    getLanguage() {
        let language = localStorage.getItem('language');
        if (language === 'DE' || language === 'EN') this.languageSubject.next(language as Language)
        else this.languageSubject.next('DE');
    }
}