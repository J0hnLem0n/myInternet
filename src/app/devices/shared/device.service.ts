import { Injectable } from '@angular/core';

import { DEVICES } from './mock-devices';

@Injectable()

export class DeviceService {
  static getDevices(): Promise<DEVICES[]> {
    return Promise.resolve(DEVICES);
  }
}
