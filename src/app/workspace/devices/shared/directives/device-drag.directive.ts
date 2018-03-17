import { Directive, HostListener } from '@angular/core';
import { MoveObjectService } from '../../../move-objects/move-object.service';

@Directive({
  selector: '[appDeviceDrag]',
  providers: [MoveObjectService]
})
/**TODO: Добавить поддержку firefox и др.*/
export class DeviceDragDirective {
  constructor(private moveObjectService: MoveObjectService) {}

  @HostListener('mousedown', ['$event.target']) onMouseDown() {
    this.moveObjectService.createObject(event);
  }
}
