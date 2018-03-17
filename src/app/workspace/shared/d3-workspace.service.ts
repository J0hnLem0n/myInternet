import { Injectable } from '@angular/core';
import * as d3 from 'd3';

@Injectable()
export class D3WorkspaceService {
  public svg;
  constructor() {}

  public initWorkspace(): D3WorkspaceService {
    this.svg = d3.select('#chart').append('svg');
    const width = '100%';
    const height = '100%';
    this.svg.attr('height', height)
      .attr('width', width);
    return this;
  }
  public drawLine(): D3WorkspaceService {
    this.svg.append('line')
      .style('stroke', 'gray')
      .style('stroke-width', '2')
      .attr('x1', 20)
      .attr('y1', 30)
      .attr('x2', 300)
      .attr('y2', 300);
    return this;
  }
}
