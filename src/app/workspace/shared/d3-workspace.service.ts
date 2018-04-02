import { Injectable } from '@angular/core';
import * as d3 from 'd3';

@Injectable()
export class D3WorkspaceService {
  private svg;

  public initWorkspace(): D3WorkspaceService {
    /**TODO: отвязаться от ид #workspace (создать директиву)*/
    this.svg = d3.select('#workspace').append('svg');
    const width = '100%';
    const height = '100%';
    this.svg.attr('height', height)
      .attr('width', width);
    return this;
  }

  public addDevice(obj: HTMLObjectElement): D3WorkspaceService {
    const imgSrc = obj.data;
    const imgSize = 32;
    /**TODO: Проработать точность координат*/
    const screenX = parseInt(obj.style.left, 10) - (imgSize + (24 * 2));
    const screenY = parseInt(obj.style.top, 10) - (imgSize + 24);
    /**TODO: Переместить в метод + посмотреть возможность отказаться от замыканий*/
    const dragMove = function() {
      const x = d3.event.x;
      const y = d3.event.y;
      d3.select(this)
        .attr('x', x)
        .attr('y', y);
    };
    const drag = d3.drag()
      .on('drag', dragMove);

    this.svg.append('svg:image')
      .attr('xlink:href', imgSrc)
      .attr('width', imgSize)
      .attr('height', imgSize)
      .attr('x', screenX)
      .call(drag)
      .attr('y', screenY);
    return this;
  }
}
