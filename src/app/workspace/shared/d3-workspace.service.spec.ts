import { TestBed, inject } from '@angular/core/testing';

import { D3WorkspaceService } from './d3-workspace.service';

describe('D3WorkspaceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [D3WorkspaceService]
    });
  });

  it('should be created', inject([D3WorkspaceService], (service: D3WorkspaceService) => {
    expect(service).toBeTruthy();
  }));
});
