'use strict';

var gulp = require('gulp');

// inject bower components
gulp.task('wiredep', function () {
  var wiredep = require('wiredep').stream;

  return gulp.src('src/index.html')
    .pipe(wiredep({
      directory: 'bower_components',
      exclude: [
        /foundation\.js/, /foundation\.css/, /bootstrap\.css/, /foundation\.css/,
        /jquery\.cookie\.js/,
        /jquery\.placeholder\.js/
      ]
    }))
    .pipe(gulp.dest('src'));
});
