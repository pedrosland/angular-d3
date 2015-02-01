'use strict';

angular.module('d3Angular')
  .controller('MainCtrl', function ($scope, d3aResource) {
    function addGraph(){
      $scope.graphData.push({
        title: 'Monday',
        data: d3aResource.generateData()
      });
    }

    function addGraphs(number){
      for(var i=0; i<number; i++){
        addGraph();
      }

      d3aResource.setDataNeeded($scope.graphData.length);
    }

    $scope.graphData = [];

    $scope.addGraphs = addGraphs;

    d3aResource.startWorker();

    addGraphs(3);

    $scope.$on('dataGenerated', function(e, data){
      $scope.$applyAsync(function() {
        $scope.graphData.forEach(function (graph, i) {
          graph.data = data[i];
        });
      });
    });
  });
