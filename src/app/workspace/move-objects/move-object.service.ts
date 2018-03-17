import { Injectable } from '@angular/core';

@Injectable()

export class MoveObjectService {
  private object: HTMLObjectElement;
  private svg: SVGElement;

  public createObject(event) {
    const imgSrc = MoveObjectService.getImageForObject(event.target.innerHTML);
    if (imgSrc == null) { return; }
    this.object = document.createElement('object');
    this.object.style.position = 'absolute';
    this.object.style.zIndex = '1000';
    this.object.data = imgSrc;
    document.body.appendChild(this.object) ;
    document.addEventListener('mousemove', (e) => {
      this.moveAt(e);
    });
    this.object.addEventListener('load',  () => {
      this.svg = this.object.contentDocument.querySelector('svg');
      this.svg.addEventListener('mouseup',  () => {
        this.removeObject();
      });
    });
    this.moveAt(event);
  }

  public removeObject() {
    this.object.remove();
  }
  /**TODO: Перенести в icon service(создать)*/
  static getImageForObject(iconName: string): string {
    let pathName;
    switch (iconName) {
      case 'storage':
        pathName = 'assets/img/material/device/svg/production/ic_storage_24px.svg';
        break;
      case 'computer':
        pathName = 'assets/img/material/hardware/svg/production/ic_computer_24px.svg';
        break;
      default:
        pathName = null;
    }
    return pathName;
  }

  private moveAt(event) {
    this.object.style.left = event.pageX - this.object.offsetWidth / 2 + 'px';
    this.object.style.top = event.pageY - this.object.offsetHeight / 2 + 'px';
  }
}
