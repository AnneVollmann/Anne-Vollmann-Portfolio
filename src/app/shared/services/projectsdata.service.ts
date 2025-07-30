import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ProjectsdataService {
    projects = [
        {
            title: 'Join',
            aboutDe: 'Join ist ein Task-Manager inspiriert vom Kanban-System. Es können Aufgaben erstellt, bearbeitet, organisiert und gelöscht werden. Dafür gibt es eine Drag- and Drop-Funktion und Kontakte und Kategorien können zugeordnet werden. Außerdem können User sich ein eigenes Profil anlegen.',
            aboutEn: 'Join is a task manager inspired by the Kanban method. Tasks can be created, edited, organized, and deleted. It features a drag-and-drop function, and contacts and categories can be assigned to tasks. Additionally, users can create their own profile.',
            durationWeeks: '6',
            organizationDe: 'Schon vor Beginn haben wir klare Regeln zur Einheitlichkeit des Codes aufgestellt (z.B. zur Bennennung von Funktionen und Abbildungen). Wir haben das Projekt erst grob in Teilaufgaben untergliedert, welche wir dann in einzelne Tasks mit konkreten Deadlines teilten. In regelmäßigen Videocalls tauschten wir uns aus und besprachen Ideen und Probleme.',
            organizationEn: 'Even before starting, we established clear rules to ensure code consistency (e.g., for naming functions and images). We initially divided the project into broad sub-tasks, which we then broke down into individual tasks with specific deadlines. In regular video calls, we exchanged ideas and discussed problems.',
            groupWorkDe: 'Jeder in unserem dreiköpfigen Team konnte seine Stärken und Kompetenzen einbringen. Meine Aufgabe bestand hauptsächlich in der Implementierung der JavaScript-Funktionen. Die Arbeit im Team hat Spaß gemacht und wir haben uns gegenseitig unterstützt.',
            groupWorkEn: 'Each member of our three-person team was able to contribute their strengths and skills. My main responsibility was the implementation of the JavaScript functions. Working in a team was enjoyable, and we supported each other throughout the process.',
            learnedDe: '',
            learnedEn: '',
            technologies: ['Firebase', 'Javascript', 'Css', 'Html'],
            img: 'assets/img/join.png',
            href: 'https://join.anne-vollmann.de',
            github: 'https://github.com/AnneVollmann/Join---overhauled',
        },
        {
            title: 'Dusky Swamps',
            aboutDe: 'Dusky Swamps ist ein kleines Jump-and-Run Spiel mit Fokus auf objekt-orientierte Programmierung. Als Astronaut besiegt man die Monster des Sumpfes, sammelt Edelsteine und kämpft gegen einen Endboss.',
            aboutEn: 'Dusky Swamps is a small jump-and-run game with a focus on object-oriented programming. As an astronaut, you defeat the swamp monsters, collect gems, and fight a final boss.',
            durationWeeks: '6',
            organizationDe: 'Eine eindeutige Benennung von Klassen und Methoden, sowie eine verständliche Dokumentation sind essentielle Bestandteile dieses Projekts. Regelmäßige Tests und Anpassungen waren nötig, um eine spaßige Spielerfahrung zu bieten.',
            organizationEn: 'Clear naming of classes and methods, as well as understandable documentation, are essential parts of this project. Regular testing and adjustments were necessary to provide an enjoyable gaming experience.',
            groupWorkDe: '',
            groupWorkEn: '',
            learnedDe: 'Durch die Entwicklung meines eigenen Spiels lernte ich, was es ausmacht, objekt-orientiert zu programmieren, was mir viel Spaß macht. Ich stellte mir zudem selbst viele zusätzliche Aufgaben, wie verschiedene Gegnertypen oder Attacken.',
            learnedEn: 'Through developing my own game, I learned what object-oriented programming is all about, which is something I enjoy a lot. I also gave myself many additional challenges, such as implementing different enemy types and attacks.',
            technologies: ['JavaScript', 'Css', 'Html'],
            img: 'assets/img/dusky_swamps.png',
            href: 'https://dusky-swamps.anne-vollmann.de',
            github: 'https://github.com/AnneVollmann/Dusky-Swamps',
        },
        {
            title: 'Pokémon API',
            aboutDe: 'Pokémon API ist eine Website, welche alle existierenden Pokèmon aufzeigt. Zu jedem Pokémon sind relevante Informationen hinterlegt. Auch eine Suchfunktion existiert.',
            aboutEn: 'Pokémon API is a website that displays all existing Pokémon. Relevant information is provided for each one, and a search function is also available.',
            durationWeeks: '2',
            organizationDe: 'Aufgrund der großen Menge an Daten in der API, habe ich mir im Vorhinein definiert, welche Informationen mein Projekt enthalten soll. Mit einem klaren Zeitplan und Fokus arbeitete ich effizient und zielorientiert.',
            organizationEn: 'Given the large amount of data in the API, I first defined which information my project should include. With a clear timeline and strong focus, I worked efficiently and goal-orientated.',
            groupWorkDe: '',
            groupWorkEn: '',
            learnedDe: 'Durch dieses Projekt lernte ich die Funktionsweisen von APIs kennen und wie man mit diesen arbeitet und sie in Projekte einbindet. Auch der Umgang mit Promises war Bestandteil dieser Anwendung.',
            learnedEn: 'Through this project, I learned how APIs work and how to use and integrate them into projects. Working with Promises was also a key part of this application.',
            technologies: ['REST-API', 'JavaScript', 'Css', 'Html'],
            img: 'assets/img/pokemon_api.png',
            href: 'https://pokemon-api.anne-vollmann.de',
            github: 'https://github.com/AnneVollmann/Pokemon-API',
        },
        {
            title: 'Ongoing Project',
            aboutDe: 'Aktuell arbeite ich an einer App, die die Gewichte von Haustieren tracken kann und den Halter bei Auffälligkeiten warnt.',
            aboutEn: 'I am currently working on an app that tracks pet weights and notifies the owner in case of anomalies.',
            durationWeeks: '',
            organizationDe: '',
            organizationEn: '',
            groupWorkDe: '',
            groupWorkEn: '',
            learnedDe: '',
            learnedEn: '',
            technologies: ['Angular', 'Firebase', 'Css', 'Html'],
            img: '',
            href: '',
            github: '',
        }
    ]
}