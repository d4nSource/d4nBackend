
var config = require('../config');
var gulp = require('gulp');
var path = require('path');
var typescript = require('gulp-typescript');

var tsProject = typescript.createProject(config.typescript);

exports.task = function() {

    var typescriptFiles = [
        path.join(config.app, "**/*.ts"),
//        path.join(config.typings, "**/*.ts")
        ];

    return gulp.src(typescriptFiles)
    .pipe(typescript(tsProject))
    .pipe(gulp.dest(path.join(config.outputDir, '/app')));
};