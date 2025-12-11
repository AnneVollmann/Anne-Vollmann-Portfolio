import { Injectable } from "@angular/core";
import { Technology } from "../models/technology.model"

interface Project {
  title: string;
  aboutDe: string;
  aboutEn: string;
  durationWeeks: string;
  organizationDe?: string;
  organizationEn?: string;
  groupWorkDe?: string;
  groupWorkEn?: string;
  learnedDe?: string;
  learnedEn?: string;
  technologies: Technology[];
  img: string;
  href: string;
  github: string;
}

@Injectable({
    providedIn: 'root'
})

export class ProjectsdataService {
    projects: Project[] = [
        {
            title: 'DABubble',
            aboutDe: 'DABubble ist ein Business Chat-Client mit Echtzeit-Datenübertragung, ähnlich wie Discord, WhatsApp oder Slack. Nutzer können sich als Gast, mit einem Google-Account oder mit einem erstellten Profil einloggen und in Privatchats und Gruppen schreiben. Es ist auch möglich Threads zu erstellen, auf Nachrichten zu reagieren und Nutzer, Gruppen oder Nachrichten suchen.',
            aboutEn: 'DABubble is a business chat client with real-time data transmission, similar to Discord, WhatsApp, or Slack. Users can log in as guests, with a Google account, or with a created profile, and communicate in private chats and group conversations. It’s also possible to create threads, react to messages, and search for users, groups, or messages.',
            durationWeeks: '10',
            groupWorkDe: 'Aufgrund der Komplexität des Projekts, war eine gute Organisation Pflicht. Mindestens 2x pro Woche trafen wir uns online, um uns über den Stand unserer Aufgaben auszutauschen und Fragen zu klären. Gemeinsam mergten wir unsere GitHub-Branches und teilten uns neue Aufgaben zu. Dadurch konnten wir immer einen reibungslosen Ablauf gewährleisten.',
            groupWorkEn: 'Due to the complexity of the project, good organization was essential. We met online at least twice a week to discuss the progress of our tasks and clarify any questions. Together, we merged our GitHub branches and assigned new tasks to each other, ensuring a smooth and efficient workflow throughout the project.',
            learnedDe: 'Dieses Projekt hat mich enorm viel gelehrt, was das Arbeiten mit Angular und Firebase angeht. Auch Performance-Optimierung, die Erstellung wiederverwendbarer Komponenten und das Schaffen einer sinnvollen Projekt-Struktur, waren wichtige Lernaspekte für mich.',
            learnedEn: 'This project taught me a great deal about working with Angular and Firebase. Performance optimization, creating reusable components, and developing a well-organized project structure were also key learning experiences for me.',
            technologies: ['Angular', 'Firebase', 'TypeScript', 'Tailwind', 'Css', 'Html'],
            img: 'assets/img/da-bubble.png',
            href: 'https://da-bubble.anne-vollmann.de',
            github: 'https://github.com/AnneVollmann/DABubble',
        },
        {
            title: 'Join',
            aboutDe: 'Join ist ein Task-Manager inspiriert vom Kanban-System. Es können Aufgaben erstellt, bearbeitet, organisiert und gelöscht werden. Dafür gibt es eine Drag- and Drop-Funktion und Kontakte und Kategorien können zugeordnet werden. Außerdem können User sich ein eigenes Profil anlegen.',
            aboutEn: 'Join is a task manager inspired by the Kanban method. Tasks can be created, edited, organized, and deleted. It features a drag-and-drop function, and contacts and categories can be assigned to tasks. Additionally, users can create their own profile.',
            durationWeeks: '6',
            organizationDe: 'Schon vor Beginn haben wir klare Regeln zur Einheitlichkeit des Codes aufgestellt (z.B. zur Bennennung von Funktionen und Abbildungen). Wir haben das Projekt erst grob in Teilaufgaben untergliedert, welche wir dann in einzelne Tasks mit konkreten Deadlines teilten. In regelmäßigen Videocalls tauschten wir uns aus und besprachen Ideen und Probleme.',
            organizationEn: 'Even before starting, we established clear rules to ensure code consistency (e.g., for naming functions and images). We initially divided the project into broad sub-tasks, which we then broke down into individual tasks with specific deadlines. In regular video calls, we exchanged ideas and discussed problems.',
            groupWorkDe: 'Jeder in unserem dreiköpfigen Team konnte seine Stärken und Kompetenzen einbringen. Meine Aufgabe bestand hauptsächlich in der Implementierung der JavaScript-Funktionen. Die Arbeit im Team hat Spaß gemacht und wir haben uns gegenseitig unterstützt.',
            groupWorkEn: 'Each member of our three-person team was able to contribute their strengths and skills. My main responsibility was the implementation of the JavaScript functions. Working in a team was enjoyable, and we supported each other throughout the process.',
            technologies: ['Firebase', 'JavaScript', 'Css', 'Html'],
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
            learnedDe: 'Durch die Entwicklung meines eigenen Spiels lernte ich, was es ausmacht, objekt-orientiert zu programmieren, was mir viel Spaß macht. Ich stellte mir zudem selbst viele zusätzliche Aufgaben, wie verschiedene Gegnertypen oder Attacken.',
            learnedEn: 'Through developing my own game, I learned what object-oriented programming is all about, which is something I enjoy a lot. I also gave myself many additional challenges, such as implementing different enemy types and attacks.',
            technologies: ['JavaScript', 'Css', 'Html'],
            img: 'assets/img/dusky_swamps.png',
            href: 'https://dusky-swamps.anne-vollmann.de',
            github: 'https://github.com/AnneVollmann/Dusky-Swamps',
        },
        {
            title: 'Ongoing Project',
            aboutDe: 'Aktuell arbeite ich an einer App, die die Gewichte von Haustieren tracken kann und den Halter bei Auffälligkeiten warnt.',
            aboutEn: 'I am currently working on an app that tracks pet weights and notifies the owner in case of anomalies.',
            durationWeeks: '',
            organizationDe: '',
            organizationEn: '',
            learnedDe: '',
            learnedEn: '',
            technologies: ['React', 'Firebase', 'Bootstrap', 'Css', 'Html'],
            img: '',
            href: 'https://pet-weight-tracker.anne-vollmann.de',
            github: 'https://github.com/AnneVollmann/pet-weight-tracker',
        }
    ]
}