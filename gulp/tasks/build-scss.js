var config = require('../config');
var gulp = require('gulp');
var path = require('path');
var sass = require('gulp-sass');

exports.task = function() {

    return gulp.src(path.join(config.app, '../scss/d4n.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(path.join(config.outputDir, 'css')));
	
};