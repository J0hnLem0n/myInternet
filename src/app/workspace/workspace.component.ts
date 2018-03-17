import { Component, OnInit } from '@angular/core';
import { Device } from './devices/shared/device.model';
import { DeviceService } from './devices/shared/device.service';
import { D3WorkspaceService } from './shared/d3-workspace.service';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss'],
  providers: [DeviceService, D3WorkspaceService]
})
export class WorkspaceComponent implements OnInit {
  public devices: Device[] = [];

  ngOnInit() {
    this.initDevices();
  }

  public initDevices(): Device[] {
    DeviceService.getDevices()
      .then(devices => this.devices = devices);
    return this.devices;
  }
}
