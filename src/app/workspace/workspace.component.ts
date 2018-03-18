import { Component, OnInit } from '@angular/core';
import { Device } from './devices/shared/device.model';
import { DeviceService } from './devices/shared/device.service';
import { D3WorkspaceService } from './shared/d3-workspace.service';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss'],

})
export class WorkspaceComponent implements OnInit {
  public devices: Device[] = [];
  constructor(private d3WorkspaceService: D3WorkspaceService) {}

  ngOnInit() {
    this.initDevices();
    this.d3WorkspaceService.initWorkspace();
  }

  public initDevices(): Device[] {
    DeviceService.getDevices()
      .then(devices => this.devices = devices);
    return this.devices;
  }
}
