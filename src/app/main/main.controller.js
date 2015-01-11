'use strict';

angular.module('d3Angular')
  .controller('MainCtrl', function ($scope, d3aResource) {
    function addGraph(){
      $scope.graphData.push({
        title: 'Monday',
        data: d3aResource.generateData()
      });
    }

    $scope.graphData = [];

    $scope.addGraph = addGraph;

    addGraph();

    d3aResource.updateData($scope.graphData);
  });
