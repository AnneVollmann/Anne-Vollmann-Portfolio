import { LanguageService } from "../services/language.service";
import { Language } from "../models/language.model";

export abstract class LanguageAwareBase {
    language: Language = 'DE';

    constructor(protected languageService: LanguageService) {
        this.languageService.language$.subscribe(lang => {
            this.language = lang;
        });
    }
}