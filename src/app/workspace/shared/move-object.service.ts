import { Injectable } from '@angular/core';
import { D3WorkspaceService } from './d3-workspace.service';

@Injectable()

export class MoveObjectService {
  constructor(private d3WorkspaceService: D3WorkspaceService) {}

  private object: HTMLObjectElement;
  private svg: SVGElement;

  public createObject(event: MouseEvent): void {
    const el = <HTMLSelectElement>event.target;
    const imgSrc = MoveObjectService.getImageForObject(el.innerText);
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

      /**TODO: Пофиксить. Срабатывает на path и на svg*/
      this.svg.addEventListener('mouseup',  () => {
        this.d3WorkspaceService.addDevice(this.object);
        this.removeObject();
      });
    });
    this.moveAt(event);
  }

  public removeObject(): void {
    this.object.remove();
  }

  /**TODO: Перенести в icon service(создать)
   * TODO: Объединить иконки в группы что бы сократить пути*/
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

  private moveAt(event): void {
    this.object.style.left = event.pageX - this.object.offsetWidth / 2 + 'px';
    this.object.style.top = event.pageY - this.object.offsetHeight / 2 + 'px';
  }
}
