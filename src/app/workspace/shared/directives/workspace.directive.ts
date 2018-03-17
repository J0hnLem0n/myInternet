import { Directive, OnInit } from '@angular/core';
import { D3WorkspaceService } from '../d3-workspace.service';

@Directive({
  selector: '[appWorkspace]',
  providers: [D3WorkspaceService]
})
export class WorkspaceDirective implements OnInit {

  constructor(private d3WorkspaceService: D3WorkspaceService) { }

  ngOnInit() {
    this.d3WorkspaceService.initWorkspace()
      .drawLine();
  }
}
