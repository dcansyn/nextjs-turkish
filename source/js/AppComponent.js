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
    this._clickEvents();
  };

  p._clickEvents = function () {
    let menu = document.querySelector('.menu-toggle');
    menu?.addEventListener('click', function () {
      let navigation = document.querySelector('nav.navigation');

      if (!navigation.classList.contains('active')) {
        navigation.classList.add('active');
      } else {
        navigation.classList.remove('active');
      }
    });
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
