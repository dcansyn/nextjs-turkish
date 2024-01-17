import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp';
import gifsicle from 'imagemin-gifsicle';
import mozjpeg from 'imagemin-mozjpeg';
import optipng from 'imagemin-optipng';
import svgo from 'imagemin-svgo';
import config from '../config.js';

let image = () => {
  let result = gulp.src(config.image.source.paths);

  if (config.prod) {
    result = result
      .pipe(
        imagemin([
          gifsicle({ interlaced: true }),
          mozjpeg({ quality: 75, progressive: true }),
          optipng({ optimizationLevel: 5 }),
          svgo({ plugins: [{ removeViewBox: true }, { cleanupIDs: false }] }),
        ])
      )
      .pipe(webp());
  }

  result = result.pipe(gulp.dest(config.image.target.path));

  return result;
};

export default {
  default: image,
};
