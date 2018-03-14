import { Injectable } from '@angular/core';

@Injectable()

export class MoveObjectService {
    private object;
    public create() {
        console.log('create');
        let svgDocument, svg;
        this.object = document.createElement('object');
        this.object.style.position = 'absolute';
        this.object.style.zIndex = 1000;

        this.object.addEventListener('load', function () {
            svgDocument = this.contentDocument;
            svg = svgDocument.querySelector('svg');
        });
        this.object.data = 'assets/img/material/ic_add_a_photo_24px.svg';
        document.body.appendChild(this.object);
        return this.object;
    }
    // public remove() {
    //     this.object.remove();
    // }
}
