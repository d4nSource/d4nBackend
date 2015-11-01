var config = require('../config');
var gulp = require('gulp');
var path = require('path');
var gutil = require('gulp-util'); //used to log to gulp console
var del = require('del');

exports.task = function() {
//  gutil.log("building font files...");
  var jsFiles = [
      config.bowerFolder + "/angular/angular.js",
      config.bowerFolder + "/angular-animate/angular-animate.js",
      config.bowerFolder + "/angular-aria/angular-aria.js",
      config.bowerFolder + "/angular-route/angular-route.js",
      config.bowerFolder + "/angular-material/angular-material.js"
  ];  
  var cssFiles = [
    config.bowerFolder + "/angular-material/angular-material.css"
  ];
  
  
//  gutil.log("deleting lib folder...");
  
  del([path.join(config.outputDir,'lib'), path.join(config.outputDir,'css')]);
 //   .then(function(deletedPaths){
 //     gutil.log('deleted files/folders:\n', deletedPaths.join('\n'));
 //   });
  
  gutil.log("copy new lib files...");
  
  gulp.src(cssFiles)
    .pipe(gulp.dest(path.join(config.outputDir, 'css')));
  
  return gulp.src(jsFiles)
      .pipe(gulp.dest(path.join(config.outputDir, 'lib')));
};