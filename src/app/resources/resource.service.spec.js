'use strict';

describe('d3a.resources', function() {
  var d3aResource, $interval;

  beforeEach(module('d3a.resources'));

  beforeEach(inject(function (_d3aResource_, _$interval_) {
    d3aResource = _d3aResource_;
    $interval = _$interval_;
  }));

  it('should generate a suitable array of data', function () {

    var data = d3aResource.generateData();

    expect(data.length).toBe(10);

    data.forEach(function(datum){
      // Check for numbers
      expect(parseFloat(datum)).toEqual(datum);
    });

  });

  /*
  TODO: Update this test for the worker and restore original behaviour

  it('should move 1 element in each array to the end', function () {

    var data1 = d3aResource.generateData();
    var data2 = d3aResource.generateData();

    var dataArrOrig = [data1, data2];
    var dataArr = [{
      data: angular.copy(data1)
    }, {
      data: angular.copy(data2)
    }];

    d3aResource.updateData(dataArr);

    $interval.flush(1000);

    dataArr.forEach(function(data, i){
      expect(data.data.length).toBe(data1.length);

      data.data.forEach(function(datum, j){
        if(j === data1.length - 1){
          expect(datum).toBe(dataArrOrig[i][0]);
        }else{
          expect(datum).toBe(dataArrOrig[i][j+1]);
        }
      });
    });

  });*/

});
