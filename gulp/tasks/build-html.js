var config = require('../config');
var gulp = require('gulp');
var path = require('path');

exports.task = function() {
    var source = gulp.src('./source/index.html');
    
    return source.pipe(gulp.dest(path.join(config.outputDir, '')));
 };