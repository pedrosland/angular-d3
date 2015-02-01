'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

gulp.task('jshint', function () {
  return gulp.src(['{e2e,gulp,src}/**/*.js', '*.js'])
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'));
});
