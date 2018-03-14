import { Component, OnInit } from '@angular/core';
import { Device } from '../devices/shared/device.model';
import { DeviceService } from '../devices/shared/device.service';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss'],
  providers: [DeviceService]
})
export class WorkspaceComponent implements OnInit {

  private devices: Device[] = [];

  constructor(private deviceService: DeviceService) {}

  private initDevices() {
    this.deviceService.getDevices()
      .then(devices => this.devices = devices);
    return this.devices;
  }

  ngOnInit() {
    this.initDevices();
  }
}
