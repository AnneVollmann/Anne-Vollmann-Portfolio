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
            quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            linkedin: ''
        },
        {
            name: 'b',
            project: 'b',
            quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            linkedin: ''
        }
    ]
}