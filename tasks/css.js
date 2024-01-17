import autoprefixer from 'autoprefixer';
import gulp from 'gulp';
import cleanCss from 'gulp-clean-css';
import concat from 'gulp-concat';
import encode from 'gulp-convert-encoding';
import csso from 'gulp-csso';
import postCss from 'gulp-postcss';
import gulpSass from 'gulp-sass';
import defaultSass from 'sass';
import config from '../config.js';

const sass = gulpSass(defaultSass);

let scss = () => {
  let result = gulp.src(config.scss.source.paths).pipe(encode({ from: 'windows1250', to: 'utf8' }));

  if (config.prod) {
    result = result
      .pipe(sass({ outputStyle: 'compressed', includePaths: ['node_modules'] }).on('error', sass.logError))
      .pipe(cleanCss({ level: { 1: { specialComments: 0 } } }))
      .pipe(csso({ restructure: config.prod, debug: config.prod }));
  } else {
    result = result.pipe(sass({ outputStyle: 'expanded', includePaths: ['node_modules'] }).on('error', sass.logError));
  }

  result = result
    .pipe(postCss([autoprefixer()]))
    .pipe(concat(config.scss.target.name))
    .pipe(gulp.dest(config.scss.target.path));

  return result;
};

let libCss = () => {
  if (config.libCss.source.paths.length <= 0) {
    return gulp.src('.');
  }

  let result = gulp.src(config.libCss.source.paths).pipe(encode({ from: 'windows1250', to: 'utf8' }));
  if (config.prod) {
    result = result.pipe(cleanCss({ level: { 1: { specialComments: 0 } } }));
  }
  result = result.pipe(concat(config.libCss.target.name)).pipe(gulp.dest(config.libCss.target.path));

  return result;
};

export default {
  scss,
  libCss,
};
