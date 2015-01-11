'use strict';

module.exports = function(config) {

  config.set({
    autoWatch : false,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-chrome-launcher'
    ]
  });
};
