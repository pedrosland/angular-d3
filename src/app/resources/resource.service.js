'use strict';

angular.module('d3a.resources', ['d3'])
  .factory('d3aResource', function($rootScope, $interval, d3){

    var worker;

    return {
      generateData: function generateData() {
        var max = Math.round(Math.random() * 100);

        return d3.range(0, 10).map(function () {
          return max * Math.random();
        });
      },

      startWorker: function startWorker(){
        worker = new Worker('/workers/generate-data.js');

        worker.onmessage = function(e) {
          $rootScope.$broadcast('dataGenerated', e.data);
        };
      },

      setDataNeeded: function(dataNeeded){
        worker.postMessage(dataNeeded);
      }
    };

  });
