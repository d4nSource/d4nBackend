import * as gulp from 'gulp';

const gulpClean = require('gulp-clean');



/** Delete files. */
export function cleanTask(glob: string) {
  return () => gulp.src(glob, { read: false }).pipe(gulpClean(null));
}