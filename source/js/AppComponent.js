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
    this._themeChange();
  };

  p._clickEvents = function () {
    let menu = document.querySelector('.menu-toggle');
    let navigation = document.querySelector('nav.navigation');

    menu?.addEventListener('click', function (event) {
      event.stopPropagation();

      if (!navigation.classList.contains('active')) {
        navigation.classList.add('active');
        menu.classList.add('active');
      } else {
        navigation.classList.remove('active');
        menu.classList.remove('active');
      }
    });

    document.addEventListener('click', function (event) {
      if (navigation.classList.contains('active') && !event.target.closest('nav.navigation')) {
        navigation.classList.remove('active');
        menu.classList.remove('active');
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

  p._themeChange = function () {
    const toggleSwitch = document.querySelectorAll('input[name=mode]');

    function switchTheme(e) {
      if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleSwitch.forEach((item) => {
          item.checked = true;
        });
        fe.App.theme = 'dark';
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        toggleSwitch.forEach((item) => {
          item.checked = false;
        });
        fe.App.theme = 'light';
      }

      fe.App.setCookie('theme', JSON.stringify(fe.App.theme), 365);
    }

    toggleSwitch.forEach((item) => {
      item.addEventListener('change', switchTheme, false);
    });

    if (document.documentElement.getAttribute('data-theme') == 'dark') {
      toggleSwitch.forEach((item) => {
        item.checked = true;
      });
    }
  };

  window.fe.AppComponent = new AppComponent();
})(this.fe);
