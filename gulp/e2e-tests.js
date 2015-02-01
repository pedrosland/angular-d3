'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

var browserSync = require('browser-sync');

var argv = require('yargs').argv;

// Downloads the selenium webdriver
/* jshint camelcase: false */
gulp.task('webdriver-update', $.protractor.webdriver_update);

gulp.task('webdriver-standalone', $.protractor.webdriver_standalone);
/* jshint camelcase: true */

function runProtractor (done) {
  var testFiles = [
    'test/e2e/**/*.js'
  ];

  gulp.src(testFiles)
    .pipe($.protractor.protractor({
      configFile: 'protractor.conf.js',
      args: argv.browser ? ['--browser', argv.browser]: []
    }))
    .on('error', function (err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    })
    .on('end', function () {
      // Close browser sync server
      browserSync.exit();
      done();
    });
}

gulp.task('protractor', ['protractor:src']);
gulp.task('protractor:src', ['serve:e2e', 'webdriver-update'], runProtractor);
gulp.task('protractor:dist', ['serve:e2e-dist', 'webdriver-update'], runProtractor);
