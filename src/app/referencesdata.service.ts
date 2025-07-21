import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ReferencesdataService {
    constructor() { }

    references = [
        {
            name: 'Sonja Reimann-Thanisch',
            project: 'Join',
            quoteDe: '',
            quoteEn: 'Working with Anne was an absolute privilege. She consistently impressed our team with her deep technical expertise and her ability to find smart, fast solutions to complex challenges. No matter how specific or urgent a question was, Anne either had an immediate answer or found it in record time. Her responsiveness, clarity of thought, and unwavering work ethic set a gold standard within our group. Anne’s proactive mindset and exceptional speed made her a driving force in our project’s success, and I would gladly work with her again anytime.',
            linkedin: 'https://www.linkedin.com/in/sonja-reimann-thanisch-1574881b3/'
        },
        {
            name: '',
            project: '',
            quoteDe: '',
            quoteEn: '',
            linkedin: ''
        }
    ]
}