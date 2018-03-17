import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './modules/material/material.module';

import { AppComponent } from './app.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { DeviceDragDirective } from './workspace/devices/shared/directives/device-drag.directive';
import { WorkspaceDirective } from './workspace/shared/directives/workspace.directive';


@NgModule({
  declarations: [
    AppComponent,
    WorkspaceComponent,
    DeviceDragDirective,
    WorkspaceDirective,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
