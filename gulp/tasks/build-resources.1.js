var config = require('../config');
var gulp = require('gulp');
var path = require('path');
var gutil = require('gulp-util'); //used to log to gulp console

exports.task = function() {
//  gutil.log("building font files...");
  return gulp.src(['material-font/*'])
      .pipe(gulp.dest(path.join(config.outputDir, 'material-font')));
  
};