'use strict';

angular.module('d3a.resources', ['d3'])
  .factory('d3aResource', function($interval, d3){

    return {
      generateData: function generateData() {
        var max = Math.round(Math.random() * 100);

        return d3.range(0, 10).map(function () {
          return max * Math.random();
        });
      },

      updateData: function updateData(graphData) {
        $interval(function () {
          graphData.forEach(function (graph) {
            graph.data.push(graph.data.shift());
          });
        }, 1000);
      }
    };

  });
