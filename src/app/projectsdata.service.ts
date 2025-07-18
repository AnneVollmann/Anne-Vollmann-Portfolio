import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ProjectsdataService {
    constructor() { }

    projectsDe = [
        {
            title: 'Join',
            about: 'Ein Task-Managementsystem mit der Möglichkeit, ein Profil zu erstellen. Es können Aufgaben erstellt, bearbeitet, organisiert und gelöscht werden. Dafür gibt es eine Drag- and Drop-Funktion und User und Kategorien können zugeordnet werden.',
            duration: '6 Wochen',
            organization: 'In unserem dreiköpfigen Team haben wir unsere Aufgaben, heruntergebrochen in kleinere Teilaufgaben, mit Hilfe eines Ticketsystems organisiert. In regelmäßigen Team-Videocalls haben wir uns ausgetauscht und Fragen geklärt.',
            learned: 'Jeder brachte seine Stärken ein, weshalb meine Aufgabe hauptsächlich in der Implementierung der JavaScript-Funktionen bestand. Merge-Konflikte über Git konnten wir erfolgreich im Team lösen.',
            technologies: ['javascript', 'css', 'html'],
            img: '',
        },
        {
            title: 'Dusky Swamps',
            about: 'Ein kleines Jump-an-Run Spiel mit Fokus auf objekt-orientierte Programmierung. Als Astronaut besiegt man die Monster des Sumpfs, sammelt Edelsteine und kämpft gegen den Endboss',
            duration: '6 Wochen',
            organization: 'Eindeutige Benennung von Klassen und Methoden, sowie eine verständliche Dokumentation sind essentielle Bestandteile dieses Projekts. Regelmäßige Tests und Anpassungen waren nötig, um eine spaßige Spielerfahrung zu bieten.',
            learned: 'Durch die Entwicklung meines eigenen Spiels lernte ich, was es ausmacht, objekt-orientiert zu programmieren. Ich stellte mir selbst diverse kleine Aufgaben, wie verschiedene Gegnertypen um besonders viel zu lernen.',
            technologies: ['javascript', 'css', 'html'],
            img: '',
        }
    ]

    // projectsEn = [
    //     {
    //         title: 'Join',
    //         about: '',
    //         duration: '6 weeks',
    //         organization: '',
    //         learned: '',
    //         technologies: '',
    //         img: '',
    //     },
    //     {
    //         title: 'Dusky Swamps',
    //         about: '',
    //         duration: '6 weeks',
    //         organization: '',
    //         learned: '',
    //         technologies: '',
    //         img: '',
    //     }
    // ]
}