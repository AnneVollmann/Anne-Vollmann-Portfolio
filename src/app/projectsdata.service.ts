import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ProjectsdataService {
    constructor() { }

    projects = [
        {
            title: 'Join',
            aboutDe: 'Ein Task-Managementsystem mit der Möglichkeit, ein Profil zu erstellen. Es können Aufgaben erstellt, bearbeitet, organisiert und gelöscht werden. Dafür gibt es eine Drag- and Drop-Funktion und User und Kategorien können zugeordnet werden.',
            aboutEn: '',
            duration: '6',
            organizationDe: 'In unserem dreiköpfigen Team haben wir unsere Aufgaben, heruntergebrochen in kleinere Teilaufgaben, mit Hilfe eines Ticketsystems organisiert. In regelmäßigen Team-Videocalls haben wir uns ausgetauscht und Fragen geklärt.',
            organizationEn: '',
            learnedDe: 'Jeder brachte seine Stärken ein, weshalb meine Aufgabe hauptsächlich in der Implementierung der JavaScript-Funktionen bestand. Merge-Konflikte über Git konnten wir erfolgreich im Team lösen.',
            learnedEn: '',
            technologies: ['javascript', 'css', 'html'],
            img: 'assets/img/join.png',
            href: '',
            github: 'https://github.com/AnneVollmann/Join---overhauled',
        },
        {
            title: 'Dusky Swamps',
            aboutDe: 'Ein kleines Jump-an-Run Spiel mit Fokus auf objekt-orientierte Programmierung. Als Astronaut besiegt man die Monster des Sumpfs, sammelt Edelsteine und kämpft gegen den Endboss',
            aboutEn: '',
            duration: '6',
            organizationDe: 'Eindeutige Benennung von Klassen und Methoden, sowie eine verständliche Dokumentation sind essentielle Bestandteile dieses Projekts. Regelmäßige Tests und Anpassungen waren nötig, um eine spaßige Spielerfahrung zu bieten.',
            organizationEn: '',
            learnedDe: 'Durch die Entwicklung meines eigenen Spiels lernte ich, was es ausmacht, objekt-orientiert zu programmieren. Ich stellte mir selbst diverse kleine Aufgaben, wie verschiedene Gegnertypen um besonders viel zu lernen.',
            learnedEn: '',
            technologies: ['javascript', 'css', 'html'],
            img: 'assets/img/dusky_swamps.png',
            href: '',
            github: 'https://github.com/AnneVollmann/Dusky-Swamps',
        }
    ]
}