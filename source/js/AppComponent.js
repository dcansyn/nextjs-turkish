(function (namespace) {
  'use strict';

  let AppComponent = function () {
    let o = this;
    fe.App.ready(function () {
      o.initialize();
    });
  };

  let p = AppComponent.prototype;

  p.initialize = function () {
    this._modeChange();
  };

  p._modeChange = function () {
    let isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    document.querySelectorAll('img')?.forEach((item) => {
      if (item.src.includes('/docs/dark')) {
        item.style.display = isDark ? 'block' : 'none';
      } else {
        item.style.display = isDark ? 'none' : 'block';
      }
    });
  };

  window.fe.AppComponent = new AppComponent();
})(this.fe);
