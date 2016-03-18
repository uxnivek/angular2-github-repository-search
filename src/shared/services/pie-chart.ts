// https://github.com/mgechev/angular2-seed/issues/272
// import * as d3 from 'd3';
var d3 = require('d3/d3');
var _ = require('lodash/index');

export class PieChart {

  constructor(
    public langs: any,
    public id: number
  ) {
    // console.log('langs: ', langs);
    // console.log('id: ', id);
  }

  draw() {
    var w = 200, h = w, r = h/2,
      color = d3.scale.category20c(),
      data = [],
      maxValue = 0;
    // var color = d3.scale.category20c();
    console.log('draw PieChart', this.langs, this.id, color);

    // First, determine the maxValue
    _.forEach(this.langs, function(value, key) {
      maxValue = Math.max(value, maxValue);
    });

    // Next, don't show fractions that are less than 2%
    _.forEach(this.langs, function(value, key) {
      var addData = false;

      if ( value !== maxValue ) {
        var pc = value / maxValue;
        if ( pc >= 0.02) {
          addData = true;
        }
      } else {
        addData = true;
      }

      if ( addData ) {
        data.push({'label':key, 'value':value});
      }
    });

    var vis = d3.select('#chart' + this.id).html('')
    .append('svg:svg').data([data]).attr('width', w).attr('height', h)
    .append('svg:g').attr('transform', 'translate(' + r + ',' + r + ')');
    var pie = d3.layout.pie().value(function(d){return d.value;});

    // declare an arc generator function
    var arc = d3.svg.arc().outerRadius(r);

    // select paths, use arc generator to draw
    var arcs = vis.selectAll('g.slice').data(pie).enter().append('svg:g').attr('class', 'slice');
    arcs.append('svg:path')
    .attr('fill', function(d, i){
      return color(i);
    })
    .attr('d', function (d) {
      // log the result of the arc generator to show how cool it is :)
      return arc(d);
    });

    // add the text
    arcs.append('svg:text').attr('transform', function(d){
      d.innerRadius = 0;
      d.outerRadius = r;
      return 'translate(' + arc.centroid(d) + ')';}).attr('text-anchor', 'middle').text( function(d, i) {
        return data[i].label;
      }
    );
  }

};
