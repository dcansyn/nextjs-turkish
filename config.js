const port = 1111;
const app = 'app';
const source = 'source';

let config = {
  prod: process.argv[2] === 'p',
  app: app,
  source: source,
  port: port,
  cache: {
    path: `${source}/cache`,
  },
  copy: {
    target: {
      path: app,
    },
    source: {
      paths: [`${source}/template/pages/**/*.{tif,tiff,bmp,jpg,jpeg,gif,png,eps,webp,svg}`],
      paths: [`${source}/template/pages/**/*.{tif,tiff,bmp,jpg,jpeg,gif,png,eps,webp,svg}`],
    },
  },
  template: {
    target: {
      path: app,
    },
    source: {
      paths: [`${source}/template/pages/**/*.html`],
      watch: [`${source}/template/**/*`],
    },
  },
  scss: {
    target: {
      name: 'all.min.css',
      path: `${app}/assets/css`,
    },
    source: {
      paths: [`${source}/scss/**/*.scss`],
    },
  },
  libCss: {
    target: {
      name: 'lib.min.css',
      path: `${app}/assets/css`,
    },
    source: {
      paths: [`${source}/lib/css/**/*.css`],
    },
  },
  js: {
    target: {
      name: 'all.min.js',
      path: `${app}/assets/js`,
    },
    source: {
      paths: [`${source}/js/**/*.js`],
    },
  },
  libJs: {
    target: {
      name: 'lib.min.js',
      path: `${app}/assets/js`,
    },
    source: {
      paths: [`${source}/lib/js/**/*.js`],
    },
  },
  font: {
    target: {
      path: `${app}/assets/fonts`,
    },
    source: {
      paths: [`${source}/fonts/**/*.{eot,svg,ttf,woff,woff2}`],
    },
  },
  video: {
    target: {
      path: `${app}/assets/videos`,
    },
    source: {
      paths: [`${source}/videos/**/*.{mp4,webm,mkv,flv,ogv,ogg,gif,avi,mov,wmv,mpeg,mpg,mp2,m4v,svi,3gp,3g2}`],
    },
  },
  image: {
    target: {
      path: `${app}/assets/images`,
    },
    source: {
      paths: [`${source}/images/**/*.{tif,tiff,bmp,jpg,jpeg,gif,png,eps,webp,svg}`],
    },
  },
};

export default config;
