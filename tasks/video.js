import gulp from 'gulp';
import config from '../config.js';

let video = () => gulp.src(config.video.source.paths).pipe(gulp.dest(config.video.target.path));

export default {
  default: video,
};
