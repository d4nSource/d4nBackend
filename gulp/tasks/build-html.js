var config = require('../config');
var gulp = require('gulp');
var path = require('path');
var inject = require('gulp-inject');

exports.task = function() {
    var target = gulp.src('./source/index.html');
    var sources = gulp.src(['./lib/**/*.js', './app/**/*.js', './css/**/*.css'], {
            cwd: config.outputDir,
            read: false
            });
    
    return target.pipe(inject(sources))
    .pipe(gulp.dest(path.join(config.outputDir, '')));
 };