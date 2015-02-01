/* global onmessage: true, postMessage: true */

'use strict';

var interval,
  countDataNeeded = 0;

function range(start, end){
  var result = [];

  for(var i = start; i <= end; i++){
    result.push(i);
  }

  return result;
}

function generateData() {
  var max = Math.round(Math.random() * 100);

  return range(0, 10).map(function () {
    return max * Math.random();
  });
}

function init(){
  interval = setInterval(function(){
    var data = [];

    for(var i=0; i<countDataNeeded; i++){
      data.push(generateData());
    }

    postMessage(data);
  }, 1000);
}

init();

onmessage = function(e){
  countDataNeeded = e.data;
};
