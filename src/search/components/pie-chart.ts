// https://github.com/mgechev/angular2-seed/issues/272
import {Repository} from './repository';
let d3 = require('d3/d3');
let _ = require('lodash/index');

export class PieChart {
  radius: number;

  constructor(
    private languages: Array<Object>,
    private repository: Repository
    ) { }

  draw(radius = 100) {
    // Return if no language
    if (_.isEmpty(this.languages)) return;

    this.radius = radius;
    let w = this.radius * 2;
    let h = w;
    let color = d3.scale.category20c();
    let data = [];
    let maxValue = 0;

    // First, determine the maxValue
    _.forEach(this.languages, (value, key) => {
      maxValue = Math.max(value, maxValue);
    });

    // Next, don't show fractions that are less than 2%
    _.forEach(this.languages, (value, key) => {
      let addData = false;
      if (value !== maxValue) {
        let pc = value / maxValue;
        if (pc >= 0.02) {
          addData = true;
        }
      } else {
        addData = true;
      }

      if (addData) {
        data.push({ 'label': key, 'value': value });
      }
    });

    let vis = d3.select('#chart' + this.repository.id).html('')
      .append('svg:svg').data([data]).attr('width', w).attr('height', h)
      .append('svg:g').attr('transform', 'translate(' + this.radius + ',' + this.radius + ')');

    let pie = d3.layout.pie().value((d) => {
      return d.value;
    });

    // declare an arc generator function
    let arc = d3.svg.arc().outerRadius(this.radius);

    // select paths, use arc generator to draw
    let arcs = vis.selectAll('g.slice').data(pie).enter().append('svg:g').attr('class', 'slice');
    arcs.append('svg:path')
      .attr('fill', (d, i) => {
      return color(i);
    })
      .attr('d', (d) => {
      // log the result of the arc generator to show how cool it is :)
      return arc(d);
    });

    // add the text
    arcs.append('svg:text').attr('transform', (d) => {
      d.innerRadius = 0;
      d.outerRadius = this.radius;
      return 'translate(' + arc.centroid(d) + ')';
    }).attr('text-anchor', 'middle').text((d, i) => {
      return data[i].label;
    });
  }

};
