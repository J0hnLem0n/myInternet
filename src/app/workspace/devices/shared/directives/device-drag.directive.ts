import { Directive, HostListener } from '@angular/core';
import { MoveObjectService } from '../../../shared/move-object.service';

@Directive({
  selector: '[appDeviceDrag]',
  providers: [MoveObjectService]
})

export class DeviceDragDirective {
  constructor(private moveObjectService: MoveObjectService) {}
  /**TODO: Добавить поддержку firefox и др.*/
  @HostListener('mousedown', ['$event.target']) onMouseDown() {
    this.moveObjectService.createObject(<MouseEvent>event);
  }
}
