import { Injectable } from '@angular/core';
import { Device } from './device.model';

import { DEVICES } from './mock-devices';

@Injectable()

export class DeviceService {
  static getDevices(): Promise<Device[]> {
    return Promise.resolve(DEVICES);
  }
}
