import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class SocialButtonsService {
    socialBtns = [
        { srcBase: 'assets/icons/button_mail', alt: 'mailBtn', hover: false, href: 'mailto:kontakt@anne-vollmann.de' },
        { srcBase: 'assets/icons/button_github', alt: 'githubBtn', hover: false, href: 'https://github.com/AnneVollmann' },
        { srcBase: 'assets/icons/button_linkedin', alt: 'linkedinBtn', hover: false, href: 'https://www.linkedin.com/in/anne-vollmann-38998a332/' }
    ];
}
