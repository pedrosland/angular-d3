'use strict';

angular.module('d3Angular')
  .controller('MainCtrl', function ($scope, d3) {
    function addGraph(){
      var max = Math.round(Math.random() * 100);

      $scope.graphData.push({
        title: 'Monday',
        data: d3.range(0, 10).map(function(){
          return max * Math.random();
        })
      });
    }

    $scope.graphData = [];

    $scope.addGraph = addGraph;

    addGraph();
  });
