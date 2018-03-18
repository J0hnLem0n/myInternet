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

  public addDevice(obj: HTMLObjectElement): D3WorkspaceService {
    const imgSrc: string = obj.data;
    const imgSize = 64;
    const screenX = parseInt(obj.style.left, 10) - imgSize;
    const screenY = parseInt(obj.style.top, 10) - imgSize;
    this.svg.append('svg:image')
      .attr('xlink:href', imgSrc)
      .attr('width', imgSize)
      .attr('height', imgSize)
      .attr('x', screenX)
      .attr('y', screenY);
    return this;
  }
}
