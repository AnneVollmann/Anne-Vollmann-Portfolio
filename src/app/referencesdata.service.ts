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
            quoteDe: 'Die Zusammenarbeit mit Anne war ein absolutes Privileg. Sie beeindruckte unser Team stets mit ihrem tiefgehenden technischen Fachwissen und ihrer Fähigkeit, intelligente und schnelle Lösungen für komplexe Herausforderungen zu finden. Egal, wie spezifisch oder dringend eine Frage war, Anne hatte entweder sofort eine Antwort parat oder fand sie in Rekordzeit. Ihre Reaktionsschnelligkeit, Klarheit im Denken und unermüdliche Arbeitsmoral setzten innerhalb unserer Gruppe einen Goldstandard. Annes proaktive Einstellung und außergewöhnliche Schnelligkeit machten sie zu einer treibenden Kraft für den Erfolg unseres Projekts und ich würde jederzeit gerne wieder mit ihr zusammenarbeiten.',
            quoteEn: 'Working with Anne was an absolute privilege. She consistently impressed our team with her deep technical expertise and her ability to find smart, fast solutions to complex challenges. No matter how specific or urgent a question was, Anne either had an immediate answer or found it in record time. Her responsiveness, clarity of thought, and unwavering work ethic set a gold standard within our group. Anne’s proactive mindset and exceptional speed made her a driving force in our project’s success, and I would gladly work with her again anytime.',
            linkedin: 'https://www.linkedin.com/in/sonja-reimann-thanisch-1574881b3/'
        },
        {
            name: 'Liane Schmuhl',
            project: 'Join',
            quoteDe: 'Anne ist eine engagierte und gut organisierte Teamplayerin. Sie arbeitet zielstrebig und unterstützt andere Teammitglieder, um den erfolgreichen Abschluss eines Projekts sicherzustellen. Ich hatte die Gelegenheit, ihre Professionalität im Rahmen unseres "Join"-Projekts kennenzulernen und bin dankbar für die tolle Zusammenarbeit.',
            quoteEn: 'Anne is a hard-working, well-organized team player. She works purposefully and supports other team members to ensure the successful completion of a project. I had the opportunity to experience her professionalism in our ’Join’ project and am grateful for the great collaboration.',
            linkedin: ''
        }
    ]
}