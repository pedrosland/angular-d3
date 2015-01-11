'use strict';

angular.module('d3Angular')
  .directive('d3aLineGraph', function(d3){
    return {
      restrict: 'E',
      link: function(scope, elem, attr){
        var margin, width, height;
        var x, y, xAxis, yAxis, line, svg;

        function initElem() {
          elem.addClass('d3a-line-graph');

          margin = {top: 20, right: 20, bottom: 30, left: 50};
          width = (attr.width || 300) - margin.left - margin.right;
          height = (attr.height || 200) - margin.top - margin.bottom;

          svg = d3.select(elem[0]).append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
        }

        function initD3() {
          x = d3.scale.linear()
            .range([0, width]);

          y = d3.scale.linear()
            .range([height, 0]);

          xAxis = d3.svg.axis()
            .scale(x)
            .orient('bottom');

          yAxis = d3.svg.axis()
            .scale(y)
            .orient('left');

          line = d3.svg.line()
            .x(function(d, i) { return x(i); })
            .y(function(d) { return y(d); });
        }

        function initData(data){

          x.domain([0, data.length]);
          y.domain([0, d3.max(data)]);

          svg.append('g')
            .attr('class', 'axis x-axis')
            .attr('transform', 'translate(0,' + height + ')')
            .call(xAxis);

          svg.append('g')
            .attr('class', 'axis y-axis')
            .call(yAxis);

          svg.append('path')
            .datum(data)
            .attr('class', 'line')
            .attr('d', line);
        }

        initElem();
        initD3();

        scope.$watch(attr.data, function(oldVal, newVal){
          initData(newVal.data);
        }, true);
      }
    };
  });
