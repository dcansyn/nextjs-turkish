import gulp from 'gulp';
import config from '../config.js';

let font = () => gulp.src(config.font.source.paths).pipe(gulp.dest(config.font.target.path));

export default {
  default: font,
};
