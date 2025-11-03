import { Injectable } from "@angular/core";

interface Reference {
  name: string;
  project: string;
  quoteDe: string;
  quoteEn: string;
  linkedin: string;
}

@Injectable({
    providedIn: 'root'
})

export class ReferencesdataService {
    references: Reference[] = [
        {
            name: 'Raphaela Multhaup',
            project: 'DABubble',
            quoteDe: 'Anne überzeugt durch ihre tiefe technische Expertise und ihr Engagement, sich gründlich in den Code einzuarbeiten, bis sie jedes Detail versteht. Ihre Arbeitsweise ist geprägt von hoher Eigeninitiative, Verlässlichkeit und großem Commitment. Sie bringt sich mit voller Energie und Leidenschaft ins Projekt ein. Dabei bleibt sie immer freundlich, teamorientiert und stimmt alle wichtigen Entscheidungen ab. Im Laufe der Zusammenarbeit hat sich ganz natürlich ergeben, dass sie die Führungsrolle in unserem Team übernommen hat. Ihr technisches Verständnis, ihre Struktur und ihr Verantwortungsbewusstsein haben sie dafür prädestiniert. Durch diese Kombination aus Know-how, Teamgeist und Leadership hat sie wesentlich zum Erfolg unseres Projekts beigetragen.',
            quoteEn: 'Anne stands out through her deep technical expertise and her dedication to thoroughly understanding the code down to every detail. Her working style is characterized by high initiative, reliability, and strong commitment. She brings full energy and passion to the project while always remaining friendly, team-oriented, and aligning all important decisions with the team. Over the course of our collaboration, it naturally evolved that she took on a leadership role within our team. Her technical understanding, organizational skills, and sense of responsibility made her ideally suited for this role. Through this combination of know-how, team spirit, and leadership, she has made a significant contribution to the success of our project.',
            linkedin: 'https://www.linkedin.com/in/raphaela-multhaup-096aba353/'
        },
        {
            name: 'Nicolaus Feldtmann',
            project: 'DABubble',
            quoteDe: 'Die Zusammenarbeit mit Anne war in vielerlei Hinsicht beeindruckend und angenehm. Sie fand in bemerkenswert kurzer Zeit Lösungen für komplexe Probleme, was ihre analytischen Fähigkeiten und ihr schnelles Denken unter Beweis stellt. Oft brachte Anne kreative und kluge Ideen ein, die die Arbeit für das gesamte Team erheblich erleichterten. Anne übernahm gerne Verantwortung und tat dies auf eine Weise, die nie aufdringlich war. Ihr Engagement und ihre Bereitschaft, nach Abschluss ihrer eigenen Aufgaben umgehend anderen zu helfen, zeugen von ihrem Teamgeist und ihrer Hilfsbereitschaft. Die Arbeit mit Anne war ein echtes Vergnügen, und ohne ihre Beiträge wäre das Projekt in dieser Form nicht realisierbar gewesen. Ihre Unterstützung hat einen entscheidenden Beitrag zum Erfolg des Projekts geleistet.',
            quoteEn: 'Working with Anne was impressive and enjoyable in many ways. She found solutions to complex problems in remarkably short time, demonstrating her analytical skills and quick thinking. Anne often contributed creative and insightful ideas that greatly facilitated the work for the entire team. She willingly took on responsibility in a manner that was never intrusive. Her dedication and readiness to immediately assist others once her own tasks were completed reflect her strong team spirit and helpfulness. Working with Anne was a true pleasure, and without her contributions, the project would not have been feasible in its current form. Her support played a crucial role in the success of the project.',
            linkedin: 'https://www.linkedin.com/in/nicolaus-feldtmann-861371376/'
        },
        {
            name: 'Sonja Reimann-Thanisch',
            project: 'Join',
            quoteDe: 'Die Zusammenarbeit mit Anne war ein absolutes Privileg. Sie beeindruckte unser Team stets mit ihrem tiefgehenden technischen Fachwissen und ihrer Fähigkeit, intelligente und schnelle Lösungen für komplexe Herausforderungen zu finden. Egal, wie spezifisch oder dringend eine Frage war, Anne hatte entweder sofort eine Antwort parat oder fand sie in Rekordzeit. Ihre Reaktionsschnelligkeit, Klarheit im Denken und unermüdliche Arbeitsmoral setzten innerhalb unserer Gruppe einen Goldstandard. Annes proaktive Einstellung und außergewöhnliche Schnelligkeit machten sie zu einer treibenden Kraft für den Erfolg unseres Projekts und ich würde jederzeit gerne wieder mit ihr zusammenarbeiten.',
            quoteEn: 'Working with Anne was an absolute privilege. She consistently impressed our team with her deep technical expertise and her ability to find smart, fast solutions to complex challenges. No matter how specific or urgent a question was, Anne either had an immediate answer or found it in record time. Her responsiveness, clarity of thought, and unwavering work ethic set a gold standard within our group. Anne’s proactive mindset and exceptional speed made her a driving force in our project’s success, and I would gladly work with her again anytime.',
            linkedin: 'https://www.linkedin.com/in/sonja-reimann-thanisch-1574881b3/'
        },
        {
            name: 'Andrei Buha',
            project: 'DABubble',
            quoteDe: 'Es war eine Freude, mit Anne an diesem Projekt zu arbeiten. Sie ist eine sehr motivierte und begeisterte Entwicklerin, die offen für neue Ideen ist und Probleme schnell versteht. Dabei kann sie verschiedene Lösungsansätze anbieten oder die beste Option klar hervorheben. Im Verlauf des Projekts übernahm Anne auch die Rolle der Projektmanagerin des Teams und zeigte großes Engagement bei der Koordination und Lösung von Konflikten im Entwicklungsprozess. Sie entwickelte das Emoji- und Reaktionssystem sowie zahlreiche weitere Komponenten, die dem vorgegebenen Design entsprachen. Ich würde mich freuen, in Zukunft wieder mit ihr an Projekten zusammenzuarbeiten.',
            quoteEn: 'It was a pleasure working with Anne on this project. She is a highly motivated and enthusiastic developer, open to new ideas and quick to understand problems. She can offer multiple solutions or clearly highlight the best option. During the course of the project, Anne also took on the role of project manager for the team, demonstrating strong commitment in coordinating tasks and resolving conflicts in the development process. She developed the emoji and reaction system, as well as numerous other components, all in line with the provided design specifications. I would be delighted to collaborate with her on projects again in the future.',
            linkedin: 'https://www.linkedin.com/in/andrei-octavian-buha-web-developer/'
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