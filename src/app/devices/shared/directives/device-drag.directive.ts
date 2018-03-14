import { Directive, HostListener } from '@angular/core';
import { MoveObjectService } from '../../move-objects/move-object.service';

@Directive({
  selector: '[appDeviceDrag]',
  providers: [MoveObjectService]
})

export class DeviceDragDirective {
  constructor(private moveObjectService: MoveObjectService) {}

  @HostListener('mousedown', ['$event.target']) onMouseDown() {
    this.moveObjectService.createObject(event);
  }
  // @HostListener('mousemove', ['$event.target']) onMouseDown() {
  //   this.moveObjectService.createObject(event);
  // }
  @HostListener('mouseup') onMouseUp() {
    this.moveObjectService.removeObject();
    console.log(this.moveObjectService);
  }

}
