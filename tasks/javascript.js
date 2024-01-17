import gulp from 'gulp';
import concat from 'gulp-concat';
import encode from 'gulp-convert-encoding';
import removeComments from 'gulp-strip-comments';
import uglify from 'gulp-uglify';
import config from '../config.js';

let js = () => {
  let result = gulp.src(config.js.source.paths);

  if (config.prod) {
    result = result
      .pipe(uglify())
      .pipe(removeComments())
      .pipe(encode({ from: 'windows1250', to: 'utf8' }));
  }

  result = result.pipe(concat(config.js.target.name)).pipe(gulp.dest(config.js.target.path));

  return result;
};

let libJs = () => {
  if (config.libJs.source.paths.length <= 0) {
    return gulp.src('.');
  }

  let result = gulp
    .src(config.libJs.source.paths)
    .pipe(removeComments())
    .pipe(concat(config.libJs.target.name))
    .pipe(gulp.dest(config.libJs.target.path));

  return result;
};

export default {
  default: js,
  libJs: libJs,
};
