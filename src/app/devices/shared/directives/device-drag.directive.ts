import { Directive, HostListener } from '@angular/core';
import { MoveObjectService } from '../../move-objects/move-object.service';

@Directive({
  selector: '[appDeviceDrag]',
  providers: [MoveObjectService]
})
export class DeviceDragDirective {
  constructor(private moveObjectService: MoveObjectService) {}

  private moveObject: HTMLElement;

  @HostListener('mousedown') onMouseDown() {
    this.moveObject = this.moveObjectService.create();
  }
  @HostListener('mouseup') onMouseUp() {
    this.moveObjectService.remove();
    console.log(this.moveObject);
  }

}
