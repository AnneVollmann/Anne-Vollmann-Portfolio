import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ProjectsdataService {
    constructor() { }

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
            technologies: ['javascript', 'css', 'html'],
            img: 'assets/img/join.png',
            href: '',
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
            learnedDe: 'Durch die Entwicklung meines eigenen Spiels lernte ich, was es ausmacht, objekt-orientiert zu programmieren, worauf ich mich schon sehr freute. Ich stellte mir zudem selbst viele zusätzliche Aufgaben, wie verschiedene Gegnertypen oder Attacken.',
            learnedEn: 'Through developing my own game, I learned what object-oriented programming is all about, which was something I had been looking forward to. I also gave myself many additional challenges, such as implementing different enemy types and attacks.',
            technologies: ['javascript', 'css', 'html'],
            img: 'assets/img/dusky_swamps.png',
            href: '',
            github: 'https://github.com/AnneVollmann/Dusky-Swamps',
        }
    ]
}