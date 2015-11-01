var config = require('../config');
var gulp = require('gulp');
var gutil = require('gulp-util'); //used to log to gulp console
var path = require('path');
var sass = require('gulp-sass');

exports.task = function() {

     gulp.src(path.join(config.app, '../scss/*.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(path.join(config.outputDir, 'css')));
	
};