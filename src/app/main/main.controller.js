'use strict';

angular.module('d3Angular')
  .controller('MainCtrl', function ($scope, d3aResource) {
    function addGraph(){
      var len = $scope.graphData.push({
        title: 'Monday',
        data: d3aResource.generateData()
      });

      d3aResource.setDataNeeded(len);
    }

    $scope.graphData = [];

    $scope.addGraph = addGraph;

    d3aResource.startWorker();

    addGraph();

    $scope.$on('dataGenerated', function(e, data){
      $scope.$applyAsync(function() {
        $scope.graphData.forEach(function (graph, i) {
          graph.data = data[i];
        });
      });
    });
  });
