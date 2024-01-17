import browser from 'browser-sync';
import gulp from 'gulp';
import run from 'gulp4-run-sequence';
import config from './config.js';
import clean from './tasks/clean.js';
import copy from './tasks/copy.js';
import css from './tasks/css.js';
import font from './tasks/font.js';
import image from './tasks/image.js';
import javascript from './tasks/javascript.js';
import template from './tasks/template.js';
import video from './tasks/video.js';

gulp.task('clean', async () => clean.default());
gulp.task('font', () => font.default());
gulp.task('image', () => image.default());
gulp.task('video', () => video.default());
gulp.task('scss', async () => css.scss());
gulp.task('libCss', async () => css.libCss());
gulp.task('js', async () => javascript.default());
gulp.task('libJs', async () => javascript.libJs());
gulp.task('template', async () => template.default());
gulp.task('copy', async () => copy.default());
gulp.task('browser', () => browser({ notify: true, port: config.port, server: { baseDir: [config.app] } }));

gulp.task('watch', () => {
  let reload = (done) => {
    browser.reload();
    done();
  };

  gulp.watch(config.js.source.paths, { delay: 500 }, gulp.series(javascript.default, reload));
  gulp.watch(config.libJs.source.paths, { delay: 500 }, gulp.series(javascript.libJs, reload));
  gulp.watch(config.scss.source.paths, { delay: 500 }, gulp.series(css.scss, reload));
  gulp.watch(config.libCss.source.paths, { delay: 500 }, gulp.series(css.libCss, reload));
  gulp.watch(config.template.source.watch, { delay: 500 }, gulp.series(template.default, reload));
});

let tasks = (cb) => {
  if (config.prod) return run('clean', ['font', 'image', 'video'], 'js', 'libJs', 'scss', 'libCss', 'template', 'copy', cb);

  return run('js', 'libJs', 'scss', 'libCss', 'template', ['browser', 'watch'], cb);
};

gulp.task('d', (cb) => tasks(cb));
gulp.task('p', (cb) => tasks(cb));
