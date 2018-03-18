import { Injectable } from '@angular/core';
import * as d3 from 'd3';

@Injectable()
export class D3WorkspaceService {
  private svg;

  public initWorkspace(): D3WorkspaceService {
    this.svg = d3.select('#workspace').append('svg');
    const width = '100%';
    const height = '100%';
    this.svg.attr('height', height)
      .attr('width', width);
    return this;
  }

  public addDevice(obj: HTMLObjectElement): D3WorkspaceService {
    console.dir(obj);
    const imgSrc: string = obj.data;
    const imgSize = 32;
    /**TODO: Проработать точность координат*/
    const screenX = parseInt(obj.style.left, 10) - (imgSize + (24 * 2));
    const screenY = parseInt(obj.style.top, 10) - (imgSize + 24);
    this.svg.append('svg:image')
      .attr('xlink:href', imgSrc)
      .attr('width', imgSize)
      .attr('height', imgSize)
      .attr('x', screenX)
      .attr('y', screenY);
    return this;
  }
}
