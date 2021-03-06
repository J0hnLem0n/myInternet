import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './modules/material/material.module';

import { AppComponent } from './app.component';

import { WorkspaceComponent } from './workspace/workspace.component';
import { DeviceDragDirective } from './workspace/devices/shared/directives/device-drag.directive';
import { D3WorkspaceService } from './workspace/shared/d3-workspace.service';
import { DeviceService } from './workspace/devices/shared/device.service';


@NgModule({
  declarations: [
    AppComponent,
    WorkspaceComponent,
    DeviceDragDirective
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [D3WorkspaceService, DeviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
