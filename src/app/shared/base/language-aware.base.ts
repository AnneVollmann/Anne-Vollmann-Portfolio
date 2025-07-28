import { LanguageService } from "../services/language.service";

export abstract class LanguageAwareBase {
    language = '';

    constructor(protected languageService: LanguageService) {
        this.languageService.language$.subscribe(lang => {
            this.language = lang;
        });
    }
}