import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatTooltipModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule
  ]
})
export class MaterialModule {}
