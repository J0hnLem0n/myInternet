import { Injectable } from '@angular/core';

@Injectable()
export class D3WorkspaceService {
  public svg;
  constructor() {
    this.svg = d3.select('#chart').append('svg'
  ); }

  public initWorkspace() {
    const width = 400;
    const height = 400;
    this.svg.attr('height', height)
      .attr('width', width);
    this.svg.append('line')
      .style('stroke', 'gray')
      .style('stroke-width', '2')
      .attr('x1', 20)
      .attr('y1', 30)
      .attr('x2', 300)
      .attr('y2', 300);
  }
}
