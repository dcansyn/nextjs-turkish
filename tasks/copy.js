import gulp from 'gulp';
import config from '../config.js';

let copy = () => gulp.src(config.copy.source.paths).pipe(gulp.dest(config.copy.target.path));

export default {
  default: copy,
};
