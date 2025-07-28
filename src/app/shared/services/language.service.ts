import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class LanguageService {
    private languageSubject = new BehaviorSubject<string>('DE');
    language$ = this.languageSubject.asObservable();

    /**
    * This function sets the current language to the given language.
    * After that, this new current language is saved in the local storage.
    *
    * @param {string} language - the language the user has chosen (DE or EN)
    */
    setLanguage(language: string) {
        this.languageSubject.next(language);
        localStorage.setItem('language', language);
    }

    /**
    * This function restores the language saved in the local storage.
    * If a language was saved there, this language becomes the new current language. (else the current language is german (default value))
    */
    getLanguage() {
        let language = localStorage.getItem('language');
        if (language) this.languageSubject.next(language);
    }
}