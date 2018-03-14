import { Injectable } from '@angular/core';

@Injectable()

export class MoveObjectService {
  private object: HTMLObjectElement;

  public createObject(event) {
    let svgDocument, svg;
    const self = this;

    this.object = document.createElement('object');
    this.object.style.position = 'absolute';
    this.object.style.zIndex = '1000';
    this.object.data = 'assets/img/material/ic_add_a_photo_24px.svg';
    document.body.appendChild(this.object);

    document.onmousemove = function(e) {
      self.moveAt(e);
    };

    this.object.addEventListener('load', function () {
      svgDocument = this.contentDocument;
      svg = svgDocument.querySelector('svg');
    });

    this.moveAt(event);
  }

  public removeObject() {
    this.object.remove();
  }

  private moveAt(event) {
    this.object.style.left = event.pageX - this.object.offsetWidth / 2 + 'px';
    this.object.style.top = event.pageY - this.object.offsetHeight / 2 + 'px';
  }
}
