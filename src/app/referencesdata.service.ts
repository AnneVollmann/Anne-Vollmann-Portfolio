import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ReferencesdataService {
    constructor() { }

    references = [
        {
            name: 'a',
            project: 'a',
            quote: 'a',
            linkedin: ''
        },
        {
            name: 'b',
            project: 'b',
            quote: 'b',
            linkedin: ''
        }
    ]
}